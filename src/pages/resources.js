import React from "react"
import { graphql } from "gatsby"
import Navigation from "../components/Navigation"
import Resources from "../components/Resources"

export default ({ data }) => (
  <>
    <Navigation />
    <Resources data={data} />
  </>
)

export const query = graphql`
  {
    allContentfulResource {
      edges {
        node {
          id
          type
          title
          authors {
            id
            name
          }
          yearPublished
        }
      }
    }
  }
`
