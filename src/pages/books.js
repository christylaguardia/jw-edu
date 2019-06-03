import React from "react"
import { graphql, Link } from "gatsby"
import Navigation from '../components/Navigation';
import Hero from "../components/Hero";
import Authors from "../components/Authors";

export default ({ data }) => (
  <div>
    <Navigation />
    <Hero title="Books" />
    <div className="container">
      <div className="section">
        {data && data.allContentfulBook.edges.map(({ node }) => (
          <p>
            <Link to={`/books/${node.id}`}>
              {node.title}
            </Link>
            <span> by </span>
            <Authors data={node.authors} />
          </p>
        ))}
      </div>
    </div>
  </div>
);

export const query = graphql`
  {
    allContentfulBook {
      edges {
        node {
          id
          title
          authors {
            id
            name
          }
        }
      }
    }
  }
`;
