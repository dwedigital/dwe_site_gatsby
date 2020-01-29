import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../layouts/layout"
import { Button } from "react-bootstrap"

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      {posts.map(({ node }) => {
        const { title, date } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <h1>{title}</h1>
              <div className="date">{date}</div>
            </header>
            <p className="excerpt">{node.excerpt}</p>
            <Button as={Link} to={node.fields.slug}>Read ></Button>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
         query blogIndex {
           allMdx {
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
       `
