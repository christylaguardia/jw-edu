import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Hero from "./Hero";

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Hero title={data.site.siteMetadata.title} />
    )}
  />
);

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
