import React from "react";
import { graphql } from "gatsby";

import withPageLayout from "../components/Layout/withPageLayout";
import { Tabs } from "../components/Layout/Tabs";
import Pagination from "../components/Pagination";
// import WebsiteSearch from "../components/WebsiteSearch";
import { ImageCard } from "../components/Card/ImageCard";

const Websites = ({ data, pageContext }) => {
  if (!data || !pageContext) return <p>Loading...</p>;

  const { currentPage, numPages } = pageContext;
  const websites = data.allContentfulWebsite.edges;

  if (!websites || websites.length === 0) {
    return <p>No websites found</p>;
  }

  return (
    <>
      <WebsiteSearch />
      <div className="columns is-multiline is-mobile">
        {websites.map(({ node }) => (
          <div key={node.id} className="column is-full-mobile is-full-tablet is-half-desktop">
            <ImageCard {...node} />
          </div>
        ))}
      </div>
      <Pagination basePath="websites" numPages={numPages} currentPage={currentPage} />
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
