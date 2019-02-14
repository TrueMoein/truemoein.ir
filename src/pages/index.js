import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>مشترک محتویات ذهنم شوید.</h1>
    <p>دست نوشته ها و خاطرات معین علیزاده</p>
    <p>به نام خدا، داستان به زودی آغاز می گردد.</p>

    <iframe src="https://castbox.fm/app/castbox/player/id2001592?v=4.0.30&autoplay=0" frameborder="0" width="100%" height="500"></iframe>

    <Link to="/page-2/">رفتن به صفحه بعدی</Link>
  </Layout>
)

export default IndexPage
