import React from "react";
import { graphql } from "gatsby";

import withPageLayout from "../components/Layout/withPageLayout";
import WebsiteCard from "../components/WebsiteCard";
import Pagination from "../components/Pagination";

const Websites = ({ data, pageContext }) => {
  if (!data || !pageContext) return <p>Loading...</p>; // TODO:

  const { currentPage, numPages } = pageContext;
  const websites = data.allContentfulWebsite.edges;

  if (!websites || websites.length === 0) {
    return <p>No websites found</p>;
  }

  return (
    <>
      <Pagination basePath="websites" numPages={numPages} currentPage={currentPage} />
      <div className="columns is-multiline is-mobile">
        {websites.map(({ node }) => (
          <div key={node.id} className="column is-full">
            <WebsiteCard {...node} />
          </div>
        ))}
      </div>
    </>
  );
};

export const websiteListQuery = graphql`
  query websites($skip: Int!, $limit: Int!) {
    allContentfulWebsite(filter: { hide: { ne: true } }, skip: $skip, limit: $limit) {
      edges {
        node {
          id
          name
          url
          contributors {
            id
            name
          }
          tags {
            id
            tag
          }
        }
      }
    }
  }
`;

export default withPageLayout(Websites, "Websites");
