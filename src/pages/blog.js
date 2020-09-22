import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

// TODO: pageContext is not working
const Blog = props => {
  // console.log(props);
  // const { pageContext } = props;

  // if (!pageContext) return <p>Loading...</p>; // TODO:

  // const { title } = pageContext.node;

  return (
    <div className="content">
      <h1 className="title">Blog</h1>
      {/* <h1 className="title">{title}</h1> */}
      {/* <p className="subtitle">{date}</p> */}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </div>
  );
};

export default withPageLayout(Blog);
