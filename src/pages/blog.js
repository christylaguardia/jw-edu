import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const Blog = ({ pageContext }) => {
  const { pageContext } = props;

  if (!pageContext) return <p>Loading...</p>; // TODO:

  const { title, date, markdown } = pageContext.node;

  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      {/* <p className="subtitle">{date}</p> */}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </div>
  );
};

export default withPageLayout(Blog);
