/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import CookieConsent from "react-cookie-consent"
import {Link} from "gatsby"
import { Helmet } from "react-helmet"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  
  return (
    <>
      <SEO />
      <Helmet>
        <title>Analytics, Operations & Growth Consultants | DWE Digital</title>

        <meta name="description" content={summary} />
      </Helmet>
      <Header siteTitle={title} />
      <Container>
        <Row className="mt-3 mb-5">
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <Footer />
      <CookieConsent
        buttonText="Got it"
        buttonStyle={{
          color: "white",
          backgroundColor: "black",
          border: "2px solid white",
        }}
      >
        We use cookies to ensure you get the best experience on our website.
        <span>
          {" "}
          <a
            style={{
              fontSize: "1rem",
              color: "white",
              textDecorationLine: "underline",
            }}
            href=""
          >
            <Link to="/cookies" style={{ color: "white" }}>
              Learn More
            </Link>
          </a>
        </span>
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
