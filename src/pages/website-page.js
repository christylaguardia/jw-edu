import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

import { Tabs } from "../components/Layout/Tabs";
import WebsiteCard from "../components/WebsiteCard";

const Page = ({ pageContext }) => {
  if (!pageContext) return <p>Loading...</p>;

  const { slug, websites } = pageContext.node;

  if (!websites) return <h1>None found</h1>;

  return (
    <>
      <Tabs currentPath={slug} />
      <div className="columns is-multiline is-mobile">
        {websites.map(node => (
          <div key={node.id} className="column is-full-mobile is-full-tablet is-half-desktop">
            <WebsiteCard {...node} />
          </div>
        ))}
      </div>
    </>
  );
};

export default withPageLayout(Page);
