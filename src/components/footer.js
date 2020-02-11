import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faInbox,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import "./styles/footer.css"
import { Link } from "gatsby"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Container className="container-fluid footer">
      <Row className="mb-1">
        <Col className="pt-3">
          <div className="logo">
            <span className="logo_one">DWE</span>{" "}
            <span className="logo_two">Digital</span>
          </div>
          <p>Business Growth Consultants</p>
        </Col>
      
      </Row>
      <Row className="pb-1">
        <Col>
          <p>
            <small>
              COPYRIGHT DWE Digital Ltd. © {year}. ALL RIGHTS RESERVED.
            </small>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
