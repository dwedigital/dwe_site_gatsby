import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

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
      through all your sales channels. Using analytics we focus on conversion,
      rate to minimise easted marketing spend.
    </p>
    <hr className="mt-5"></hr>
    <h1>Services</h1>
    <hr></hr>
    <Container className="mt-5 px-0">
      <Row className="mt-3 align-items-center">
        <Col xs={{ span: 12 }} lg>
          <h1 className="mb-4 impact-header">Analytics</h1>
        </Col>
        <Col xs={{ span: 12 }} lg>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fermentum tortor non mauris rhoncus condimentum. Donec posuere libero
          at suscipit ornare. Donec vel bibendum elit. Quisque diam velit,
          viverra eget pulvinar sed, commodo nec urna.
        </Col>
      </Row>

      <Row className="mt-3 align-items-center">
        <Col xs={{ order: 12, span: 12 }} lg={{ order: 1 }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fermentum tortor non mauris rhoncus condimentum. Donec posuere libero
          at suscipit ornare. Donec vel bibendum elit. Quisque diam velit,
          viverra eget pulvinar sed, commodo nec urna.
        </Col>

        <Col xs={{ order: 1, span: 12 }} lg={{ order: 12 }}>
          <h1 className="mb-4 impact-header">Operations</h1>
        </Col>
      </Row>

      <Row className="mt-3 align-items-center">
        <Col xs={{ span: 12 }} lg>
          <h1 className="mb-4 impact-header">Growth</h1>
        </Col>
        <jsx></jsx>
        <Col xs={{ span: 12 }} lg>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fermentum tortor non mauris rhoncus condimentum. Donec posuere libero
          at suscipit ornare. Donec vel bibendum elit. Quisque diam velit,
          viverra eget pulvinar sed, commodo nec urna.
        </Col>
      </Row>
    </Container>

    <hr className="mt-5"></hr>
    <h1>Recent Blog Posts</h1>
    <hr></hr>

    <hr className="mt-5"></hr>
    <h1>Work With Us</h1>
    <hr></hr>
  </Layout>
)

export default IndexPage
