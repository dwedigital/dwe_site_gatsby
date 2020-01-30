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
    <h1 className="mb-4 impact-header">We Grow Your Business</h1>
    <p>
      DWE is a consultancy that thrives on growing businesses. We work hand-in-hand with clients to ensure the obvious questions have answers, can be measured and are actionable.
    </p>
    <p className="mt-3">
      DWE has worked across many client verticals ranging from e-commerce, retail, SaaS and product manafacturers. Chances are we have seen what your business does and what best practice looks like whilst working within the parameters of your company.
    <p className="mt-3">
      With a career spanning Digital Marketing, Analytics, Operations & Product Management our focus is helping you achieve business growth and managing how to scale your company across all digital touchpoints.
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
