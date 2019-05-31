import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h1>Authors</h1>
    {data && data.allContentfulAuthor.edges.map(({ node }) => <p>{node.name}</p>)}
  </div>
)

export const query = graphql`
  {
    allContentfulAuthor {
      edges {
        node {
          name
          firstName
          lastName
        }
      }
    }
  }
`