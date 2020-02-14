import React from "react"
import Layout from "./layout"
import './styles/layouts.css'
import { Helmet } from "react-helmet"
import './styles/blog-layout.css'
import SEO from '../components/seo'

function BlogPostLayout({ children, pageContext }) {
  const { title,date, summary } = pageContext.frontmatter
  console.log(children)
  return (
    <>
      <Layout>
        <SEO title={title}/>
        <h1 className="section">{title}</h1>

        <article className="mt-5">{children}</article>
      </Layout>
    </>
  )
}

export default BlogPostLayout
