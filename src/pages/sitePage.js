import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const SitePage = ({ pageContext }) => {
  if (!pageContext) return null;

  const { body } = pageContext.node;
  const html = body?.childMarkdownRemark?.html;

  if (!html) return null;

  return (
    <div className="content">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default withPageLayout(SitePage);
