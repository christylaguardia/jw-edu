import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="container">
        <div className="section">
        <div className="tags are-medium">
          {data.allContentfulTag.edges.map(({ node }) => (
            <Link to={`/tags/${node.id}`} className="tag is-link">
              {node.tag}
            </Link>
          ))}
        </div>
        </div>
      </div>
    )}
  />
);

const query = graphql`
  {
    allContentfulTag (
      sort: {
        fields: [tag]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          tag
        }
      }
    }
  }
`;
