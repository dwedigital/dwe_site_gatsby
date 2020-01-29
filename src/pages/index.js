import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mb-4 impact-header">Analytics. Growth. Operations.</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum
      tortor non mauris rhoncus condimentum. Donec posuere libero at suscipit
      ornare. Donec vel bibendum elit. Quisque diam velit, viverra eget pulvinar
      sed, commodo nec urna.
    </p>
  </Layout>
)

export default IndexPage
