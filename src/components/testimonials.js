import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import './styles/testimonials.css'

const Testimonials = () => {
  return (
    <Container>
      <h1 className="section">Testimonials</h1>
      <Row>
        <Col lg lg className="p-3 m-2 testimonial">
          <Row>
            It was a pleasure working with DWE Digital on our European paid search
            business at adidas. Our early conversations and analysis led to a
            total account restructure and a total revamp of our approach. DWE Digital
            are professional, personable, analytical, knowledgeable and I would
            gladly work with them again in the future.
          </Row>
          <Row>
            <div>
              <h4 className="mt-2">Emily Hardy</h4>
            </div>
          </Row>
          <Row
            style={{
              "font-style": "italic",
              "font-size": "1rem",
            }}
          >
            Director | adidas Global
          </Row>
        </Col>
        <Col lg lg className="p-3 m-2 testimonial">
          <Row>
            DWE Digital was instrumental in helping me lay out the plan for digital
            transformation at Russell & Bromley. They have been a solid adviser on
            all things Digital within the business from recruitment and strategy
            down to the details of reporting, analytics and day-to-day
            operations.
          </Row>
          <Row>
            <div>
              <h4 className="mt-2">Sebastian Bromley</h4>
            </div>
          </Row>
          <Row
            style={{
              "font-style": "italic",
              "font-size": "1rem",
            }}
          >
            Head of Digital | Russell & Bromley
          </Row>
        </Col>
        <Col lg lg className="p-3 m-2">
          <Row>
            I've worked with DWE Digital on several businesses I've invested in or been
            on the board of. They are able to think strategically and understand
            what needs to be implemented to drive positive change. I've
            personally recommended DWE Digital in the past and would 100% recommend them
            again in the future.
          </Row>
          <Row>
            <div>
              <h4 className="mt-2">Aaron Chatterley</h4>
            </div>
          </Row>
          <Row
            style={{
              "font-style": "italic",
              "font-size": "1rem",
            }}
          >
            Investor & Founder | Feelunique
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials
