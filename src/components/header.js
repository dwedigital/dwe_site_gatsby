import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Navbar, Container, Nav, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
        siteSocialinks {
          linkedin {
            link
            icon
          }
          twitter {
            link
            icon
          }
        }
      }
    }
  `)
  return (
    <Navbar expand="lg" className="mt-3 px-3">
      <Container className="flex-column">
        <Row>
          <Navbar.Brand as={Link} to="/">
            {data.site.siteMetadata.title}
          </Navbar.Brand>
        </Row>

        <Row style={{ width: "100%" }}>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="pl-0">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={data.site.siteSocialinks.linkedin.link}>
              <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
            </Nav.Link>
            <Nav.Link as={Link} to={data.site.siteSocialinks.twitter.link}>
              <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
