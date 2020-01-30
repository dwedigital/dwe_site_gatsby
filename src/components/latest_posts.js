import React from "react"
import {useStaticQuery ,graphql, Link } from "gatsby"
import { Button } from "react-bootstrap"

const Posts = ()=> {

  const data = useStaticQuery(graphql`
{
      allMdx(limit: 3, sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allMdx
  return (
  <div className="mt-3">
      {posts.map(({ node }) => {
        const { title, date } = node.frontmatter
        return (
          <div key={node.id} className="mt-3">
            <h2>{title}</h2>
            <div className="date">{date}</div>

            <p className="excerpt" style={{ "line-height": "1.6rem" }}>
              {node.excerpt}
            </p>
            <div className="ml-auto" style={{ "text-align": "right" }}>
              <Button as={Link} to={node.fields.slug} className="mt-3">
                Read >
              </Button>
            </div>
            <hr />
          </div>
        )
      })}
      
      </div>
  )
}

export default Posts
