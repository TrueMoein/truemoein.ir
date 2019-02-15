import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostBox from "../components/templates/posts/Box"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const {data: {allMarkdownRemark: {edges: posts}}} = props;
  return (
    <Layout>
      <SEO title="صفحه اصلی" keywords={[`gatsby`, `application`, `react`]} />
      {
        posts.map(post => <PostBox key={post.node.id}>{post.node.excerpt}</PostBox>)
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        html
        frontmatter {
          title
          category
          tags
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
