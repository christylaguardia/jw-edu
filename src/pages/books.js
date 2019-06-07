import React from "react"
import { graphql, Link } from "gatsby"
import { Hero } from "../components/Hero";
import { Authors } from "../components/Authors";
import { Navigation } from '../components/Navigation';;

export default ({ data }) => (
  <div>
    <Navigation />
    <Hero title="Books" />
    <div className="container">
      <div className="section">
        {data && data.allContentfulBook.edges.map(({ node }) => (
          <div className="columns" key={node.id}>
            <div className="column">
              <Link to={`/books/${node.id}`}>
                {node.title}
              </Link>
            </div>
            <div className="column">
              <Authors data={node.authors} />
            </div>
          </div>
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
