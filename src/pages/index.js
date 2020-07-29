/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import Card from '../components/TOCCard'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
                section
                description
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div>
        <div sx={{mb: 3}}>
          <h1 sx={{fontSize: 14}}>{props.site.siteMetadata.title}</h1>
          <p sx={{fontSize: 10}}>{props.site.siteMetadata.subtitle}</p>
        </div>

        <Card
          title="Table of Contents"
          content={props.allMarkdownRemark.edges}
        />
      </div>
    )}
  />
)

export default IndexPage
