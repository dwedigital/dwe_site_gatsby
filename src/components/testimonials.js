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
            It was a pleasure working with Dave on our European paid search
            business at adidas. Our early conversations and analysis led to a
            total account restructure and a total revamp of our approach. Dave
            is professional, personable, analytical, knowledgeable and I would
            gladly work with him again in the future.
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
            Director | adidias Global
          </Row>
        </Col>
        <Col lg lg className="p-3 m-2 testimonial">
          <Row>
            Dave was instrumental in helping me lay out the plan for digital
            transformation at Russell & Bromley. He has been a solid adviser on
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
            Head of Digital | Rusell & Bromley
          </Row>
        </Col>
        <Col lg lg className="p-3 m-2">
          <Row>
            I've worked with Dave on several businesses I've invested in or been
            on the board of. He is able to think strategically and understand
            what needs to be implemented to drive positive change. I've
            personally recommended him in the past and would 100% recommend him
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
