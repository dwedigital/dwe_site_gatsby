import React from "react"
import { Table} from "react-bootstrap"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Cookie Policy" />
    <h1>Cookie Policy</h1>
    <h3>What Are Cookies</h3>
    <h4>Last Updated: 11th Feb 2020</h4>

    <p>
      Cookies are standard features of many websites, including this one.
      Cookies are tiny files that are downloaded to your computer and store
      small amounts of data about your visit to a site. This page describes what
      information they gather, how we use them and why we sometimes need to
      store these cookies. For more general information on cookies, please{" "}
      <a target="_blank" href="http://cookiesandyou.com/">
        click here
      </a>
      .
    </p>

    <h3>How We Use Cookies</h3>

    <p>
      We use cookies for a variety of reasons. Unfortunately, in most cases
      there are no industry standard options for disabling cookies without
      completely disabling the functionality and features they add to this site.
    </p>

    <h3>Disabling Cookies</h3>

    <p>
      You can prevent the use of cookies by adjusting the settings on your
      browser (refer to your browser's 'help' section for more information on
      how to do this). Please note that disabling cookies will affect the
      functionality of DWE Digital (as well as the majority of other websites that
      you visit).
    </p>

    <h3>The Cookies We Set</h3>

    <p>
      Currenty we set no cookies however we do use third party services that
      requires cookies to be set.
    </p>

    <h3>Third Party Cookies</h3>

    <p>
      In several special cases we also use cookies provided by trusted third
      parties. The following section details which third party cookies you might
      encounter whilst using DWE Digital.
    </p>

    <Table variant="dark">
      <thead>
        <tr>
          <th>Cookie Name</th>
          <th>Purpose</th>
          <th>Expiration</th>
          <th>Type</th>
        </tr>
      </thead>
      <tr>
        <td>
          <strong>Google Universal Analytics</strong>
        </td>
        <td data-header="Purpose: ">
          Set by Google Universal Analytics, the cookies are used to calculate
          visitor sessions and on-site behaviour data for analytics reports
        </td>
        <td data-header="Expiration: ">2 years</td>
        <td data-header="Type: ">Analytical</td>
      </tr>
      
      
    </Table>

    <br />

    <h3>Contact Information</h3>

    <p>
      We welcome your feedback or any questions on our cookie policy. Please
      contact us via email at{" "}
      <a href="mailto:support@dwedigital.com">support@dwedigital.com</a>
    </p>


    <h3>Changes to this Cookie Policy</h3>

    <p>
      We may change this cookie policy at any time. If we make any changes,
      we'll change the Last Updated date above.
    </p>
  </Layout>
)

export default NotFoundPage
