/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import * as helpers from '../util/helpers'

const sortFn = helpers.sorter

export default function Template(props) {
  let { markdownRemark, allMarkdownRemark } = props.data // data.markdownRemark holds our post data

  const sections = allMarkdownRemark.edges
    .map(lesson => lesson.node.frontmatter)
    .sort(sortFn)

  const { frontmatter, html } = markdownRemark

  const index = sections.findIndex(el => el.path === frontmatter.path)

  const prevLink =
    index > 0 ? (
      <Link sx={{variant: 'buttons.lesson'}} to={sections[index - 1].path}>
        {'← ' + sections[index - 1].title}
      </Link>
    ) : <div></div>

  const nextLink =
    index < sections.length - 1 ? (
      <Link sx={{variant: 'buttons.lesson'}} to={sections[index + 1].path}>
        {sections[index + 1].title + ' →'}
      </Link>
    ) : <div></div>

  return (
    <div>
      <div sx={{bg: 'surface', p: 3, variant: 'containers.surface2', borderRadius: '4px'}}>
        <h1 sx={{m: 0}}>{frontmatter.title}</h1>
        <h2 sx={{m: 0}}>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div sx={{display: 'flex', width: '100%', my: 3, justifyContent: 'space-between'}}>
        {prevLink}
        {nextLink}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query LessonByPath($path: String!) {
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
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`
