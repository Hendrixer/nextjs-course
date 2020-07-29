/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import NextJSLogo from '../assets/next.svg'
import ThemeSwitch from '../components/themeSwitch'
// import jpg from "../../static/posterframe.jpg";

const TemplateWrapper = props => {
  return (
    <StaticQuery
      render={data => {
        const frontmatter =
          props.data && props.data.markdownRemark
            ? props.data.markdownRemark.frontmatter
            : null

        return (
          <div>
            <Helmet
              title={
                frontmatter
                  ? `${frontmatter.title} – ${frontmatter.section} – ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: 'og:title',
                  content: frontmatter
                    ? `${frontmatter.title} – ${frontmatter.section} – ${data.site.siteMetadata.title}`
                    : data.site.siteMetadata.title
                },
                {
                  name: 'description',
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: 'og:description',
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image'
                },
                // {
                //   name: "og:image",
                //   content: "https://btholt.github.io" + jpg
                // },
                {
                  name: 'og:url',
                  content:
                    'https://hendrixer.github.io/nextjs-course' +
                    (frontmatter && frontmatter.path ? frontmatter.path : '')
                },
                {
                  name: 'keywords',
                  content: data.site.siteMetadata.keywords.join(', ')
                },
                {}
              ]}
            />
            <nav sx={{zIndex: 9999, height: '60px', bg: 'surface2', p: 2, variant: 'containers.surface', position: 'fixed', top: 0, left: 0, width: '100%' }}>
              <div sx={{variant: 'containers.page', display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <div sx={{px: 2}}>
                  <Link to="/" >
                    <div sx={{width: '50px', color: 'text'}}>
                      <NextJSLogo />
                    </div>
                  </Link>
                </div>
                {!frontmatter ? null : (
                  <div sx={{px: 2}}><h3 sx={{m: 0}}>{`${frontmatter.section} – ${frontmatter.title}`}</h3></div>
                )}
                <div>
                  <ThemeSwitch />
                </div>
              </div>
            </nav>
            <div sx={{variant: 'containers.page', mt: '60px'}}>
              <div sx={{py: 3}}>{props.children}</div>
            </div>
          </div>
        )
      }}
      query={graphql`
        query HomePage($path: String!) {
          markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              path
              title
              order
              section
              description
            }
          }
          site {
            pathPrefix
            siteMetadata {
              title
              subtitle
              description
              keywords
            }
          }
        }
      `}
    />
  )
}

export default TemplateWrapper
