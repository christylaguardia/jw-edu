import React from "react";

import withResourceLayout from "../components/Layout/withResourceLayout";
import { TextCard } from "../components/Card/TextCard";

const Page = ({ pageContext }) => {
  if (!pageContext) return <p>Loading...</p>;

  const { website } = pageContext.node;

  if (!website) return <h1>None found</h1>;

  return (
    <div className="columns is-multiline is-mobile">
      {website.map(node => (
        <div key={node.id} className="column is-full-mobile is-full-tablet is-half-desktop">
          <TextCard {...node} />
        </div>
      ))}
    </div>
  );
};

export default withResourceLayout(Page);
