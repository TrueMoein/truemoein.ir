import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/templates/layout/layout'
import PostBox from '../components/templates/posts/Box'
import SEO from '../components/templates/layout/seo'

const IndexPage = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts },
    },
  } = props
  return (
    <Layout>
      <SEO title="صفحه اصلی" keywords={[`gatsby`, `application`, `react`]} />
      {posts.map(({ node }) => (
        <PostBox key={node.id} title={node.frontmatter.title}>
          {node.excerpt}
        </PostBox>
      ))}
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
