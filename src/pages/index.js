import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import MainCard from "../components/MainCard"

const loadsPer = 15

const IndexPage = ({ data }) => {
  const [loaded, setLoaded] = useState(undefined)
  const posts = data.allMdx.edges

  useEffect(() => {
    const curLoad = sessionStorage.getItem("curLoad") || loadsPer
    setLoaded(parseInt(curLoad))
  }, [])

  return (
    <Layout showTitle={true}>
      <SEO title="Home" />
      <MainCard posts={posts} loads={loaded} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          body
          excerpt(pruneLength: 180, truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            tags
            excerpt
            draft
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
