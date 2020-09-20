import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const Blog = ({ pageContext }) => {
  const {
    title,
    markdown: {
      childMarkdownRemark: { html },
    },
  } = pageContext.node;

  return (
    <div className="content">
      <h1 className="">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default withPageLayout(Blog);
