import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const Blog = ({ data, pageContext }) => {
  // TODO: does this ever happen?
  if (!data || !pageContext) return <p>Loading...</p>;

  // if (!pageContext.node) return null;
  const { title, date, html } = pageContext.node;

  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default withPageLayout(Blog);
