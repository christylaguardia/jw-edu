import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h1>About</h1>
    <p>{data.contentfulPage.text.text}</p>
  </div>
)

export const query = graphql`
{
  contentfulPage(slug: {eq: "about"}) {
    name
    text {
      text
    }
  }
}
`