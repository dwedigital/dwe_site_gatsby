import React from "react"
import Layout from "./layout"

function BlogPostLayout({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter
  console.log(children)
  return (
    <Layout>
      <time>Published: {date}</time>
      <article>{children}</article>
    </Layout>
  )
}

export default BlogPostLayout
