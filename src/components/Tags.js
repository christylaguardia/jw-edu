import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";

export const Tags = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="container">
        <div className="section">
        <h3 className="title is-3">Topics</h3>
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
