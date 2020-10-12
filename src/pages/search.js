import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const Search = ({ pageContext }) => {
  if (!pageContext) return null;

  return (
    <div className="content">
      <h1>Search</h1>
    </div>
  );
};

export default withPageLayout(Search);
