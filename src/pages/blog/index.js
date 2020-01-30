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
              <h1 className="section">{title}</h1>
              <div className="date">Published: {date}</div>
            </header>
            <p className="excerpt">{node.excerpt}</p>
            <div style={{'text-align':'right'}}>
              <Button as={Link} to={node.fields.slug}>
                Read >
              </Button>
            </div>
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
           allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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
