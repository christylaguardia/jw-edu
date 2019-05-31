import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h1>Books</h1>
    {data && data.allContentfulBook.edges.map(({ node }) => <p>{node.title}</p>)}
  </div>
)

export const query = graphql`
{
  allContentfulBook {
    edges {
      node {
        title
      }
    }
  }
}`