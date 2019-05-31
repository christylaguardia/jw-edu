import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h1>{data.site.siteMetadata.title}</h1>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`