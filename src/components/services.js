import React from "react"
import {Container, Row, Col} from 'react-bootstrap'


const Services = () => {

  return (
    <Container className="mt-5 px-0">
      <Row className="mt-5 align-items-center">
        <Col xs={{ span: 12 }} lg className=" justify-content-center">
          <h1 className="mb-4 impact-header">
          
            ANALYTICS
          </h1>
        </Col>
        <Col xs={{ span: 12 }} lg>
          {" "}
          Analytics is the bedrock of scaling a business. Without proper
          measurement you have no way of understanding what is working and what
          is not. We work with you to ensure you have access to the data you
          need to build a meaningful measurement framework. With this in place
          the business can make informed investment decisions.
        </Col>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col xs={{ order: 12, span: 12 }} lg={{ order: 1 }}>
          {" "}
          A lot of small / medium businesses try to grow their customer base
          without consindering how this affects day to day operations. We have
          worked with several companies in the past and know the tried and
          tested journey & tools to put in place to reduce operational
          bottlenecks.
        </Col>

        <Col xs={{ order: 1, span: 12 }} lg={{ order: 12 }}>
          <h1 className="mb-4 impact-header">
   
            OPERATIONS
          </h1>
        </Col>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col xs={{ span: 12 }} lg>
          <h1 className="mb-4 impact-header">

            GROWTH
          </h1>
        </Col>
        <jsx></jsx>
        <Col xs={{ span: 12 }} lg>
          {" "}
          Growing an online business can be a minefield and prioritisation is
          key. We have extensive knowledge of online marketing to help you reach
          qualified customers effectively. We look beyond just attracting new
          leads and focus on decreasing cost per acquisiotn through Conversion
          Rate Optimisation at every step of the customer journey.
        </Col>
      </Row>
    </Container>
  )
}


export default Services