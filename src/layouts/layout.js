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
import { Container, Row, Col } from 'react-bootstrap'
import SEO from '../components/seo'

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
      <SEO/>
      <Header siteTitle={title} />
      <Container>
        <Row className="mt-3">
          <Col >
            <main>{children}</main>
          </Col>
        </Row>
        <footer></footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
