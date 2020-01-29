import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Services from '../components/services'
import Contact from '../components/contact'
import Posts from '../components/latest_posts'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mb-4 impact-header">Analytics > Operations > Growth.</h1>
    <p>
      DWE Digital is a digital consultancy focusing on scaling businesses. We
      help clients define the Objectives & Key Results of their business and how
      these will be measured. We then implement these in a measurement framework
      that informs all aspects of the business.
    </p>
    <p className="mt-3">
      With proper analytics in place we then look across the operations of your
      business to ensure you manage scale correctly.
    </p>
    <p className="mt-3">
      When the foundations are set we then manage how to grow your customer base
      through all your sales channels. Using analytics we focus on conversion
      rate to minimise wasted marketing spend.
    </p>
    <div className="mt-5">
    <h1 className="section">Services</h1>
      <Services />
      </div>

    <div className="mt-5">
    <h1 className="section">Recent Blog Posts</h1>

      <Posts />
      </div>

    <div className="mt-5">
    <h1 className="section">Work With Us</h1>
    
      <Contact />
      </div>
  </Layout>
)

export default IndexPage
