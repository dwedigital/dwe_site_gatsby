import React from "react"
import Layout from "./layout"
import './styles/layouts.css'
import { Helmet } from "react-helmet"

function BlogPostLayout({ children, pageContext }) {
  const { title,date, summary } = pageContext.frontmatter
  console.log(children)
  return (
    <>
    <Helmet>
        <title>DWE Blog | {title}</title>
      <meta name="description" content={summary} />
      </Helmet>
    <Layout>
      <h1>{title}</h1>
      <span className="published">
        Published: <time>{date}</time>
      </span>
      <article className="mt-5">{children}</article>
      </Layout>
      </>
  )
}

export default BlogPostLayout
