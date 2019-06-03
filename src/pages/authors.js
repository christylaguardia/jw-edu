import React from "react"
import { Link, graphql } from "gatsby"
import Hero from "../components/Hero";
import Navigation from '../components/Navigation';

export default ({ data }) => (
  <div>
    <Navigation />
    <Hero title="Authors" />
    <div className="container">
      <div className="section">
        {data && data.allContentfulAuthor.edges.map(({ node }) => (
          <p>
            <Link to={`/authors/${node.id}`}>
              {node.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  </div>
);

export const query = graphql`
  {
    allContentfulAuthor (
      sort: {
        fields: [
          lastName,
          firstName,
        ]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          name
          firstName
          lastName
        }
      }
    }
  }
`;
