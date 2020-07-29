/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'gatsby-link'
import {sorter} from '../util/helpers'

const LessonCard = ({ content, title }) => {
  const sections = content
    .map(lesson => lesson.node.frontmatter)
    .sort(sorter)
    .reduce((acc, lesson) => {
      if (!acc.length) {
        acc.push([lesson])
        return acc
      }

      const lastSection = acc[acc.length - 1][0].section.split(',')[0]
      if (lastSection === lesson.section.split(',')[0]) {
        acc[acc.length - 1].push(lesson)
      } else {
        acc.push([lesson])
      }

      return acc
    }, [])

  return (
    <div sx={{variant: 'containers.surface', bg: 'surface2', px: 4, py: 2, borderRadius: '4px'}}>
      <h1>{title}</h1>
      <div>
        <ul sx={{listStyle: 'none', p: 0}}>
          {sections.map(section => (
            <li key={section[0].section} sx={{my: 3}}>
              <h2>{section[0].section}</h2>
              <ol>
                {section.map(lesson => (
                  <li key={lesson.path}>
                    <Link to={lesson.path}>{lesson.title}</Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LessonCard
