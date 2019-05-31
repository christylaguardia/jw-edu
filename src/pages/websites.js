import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h1>Websites</h1>
    {data && data.allContentfulWebsite.edges.map(({ node }) => (
      <div>
        <h3><a href={node.url.url}>{node.title}</a></h3>
        <p>{node.description.description}</p>
      </div>
    ))}
  </div>
)

export const query = graphql`
  {
    allContentfulWebsite {
      edges {
        node {
          title
          url {
            url
          }
          description {
            description
          }
        }
      }
    }
  }
`