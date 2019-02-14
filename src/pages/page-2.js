import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <iframe src="https://castbox.fm/app/castbox/player/id2001592/id126225284?v=4.0.30&autoplay=0" frameborder="0" width="100%" height="500"></iframe>
  </Layout>
)

export default SecondPage
