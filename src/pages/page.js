import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const Page = ({ pageContext }) => {
  if (!pageContext) return <p>Loading...</p>;

  const html = pageContext?.node?.body?.childMarkdownRemark?.html;

  return html ? (
    <div className="content">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  ) : null;
};

export default withPageLayout(Page);
