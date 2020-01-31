import React from "react"
import { Form, Button, Container, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faInbox } from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
  function sent(e) {
    e.preventDefault()
    const col = document.querySelector(".submission")
    col.style.opacity = 0
    setTimeout(() => {
      col.innerHTML = `<span class="success">Your message has been sent. We'll be in touch!</span>`
      col.style.opacity = 1
    }, 500)
  }

  return (
    <div id="contact" className="mb-5 mt-5">
      <Container>
        <Row>
          <Col lg className="contact-left">
            <Row>
              <Col>
                If you want to find out how DWE can help your business then
                please get in touch!
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col>
                <h3>Contact Details:</h3>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="mr-3" />
                  <a href="tel:+44 (0)7788275564"> +44(0)7788275564</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faInbox} className="mr-3" />
                  <a href="mailto:dave@dwedigital.com">dave@dwedigital.com</a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg className="submission">
            <h3>Send A Message</h3>
            <form
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              onSubmit={sent}
            >
              <input type="hidden" name="bot-field" />
              <div className="form-group">
                <label for="emailinput">Your Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                  required
                  id="emailinput"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group" controlId="formMessage">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  as="textarea"
                  placeholder="Message"
                  required
                  rows="5"
                  id="message"
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
