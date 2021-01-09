import React from "react";
import withResourceLayout from "../components/Layout/withResourceLayout";
import View from "../components/View";

// const testData = [
//   {
//     id: "1",
//     title: "Title 1",
//     subtitle: "Subtitle 1",
//     description: "Description 1",
//     details: "Details 1",
//     imgSrc: "",
//   },
//   {
//     id: "2",
//     title: "Title 2",
//     subtitle: "Subtitle 2",
//     description: "Description 2",
//     details: "Details 2",
//     imgSrc: "",
//   },
//   {
//     id: "3",
//     title: "Title 3",
//     subtitle: "Subtitle 3",
//     description: "Description 3",
//     details: "Details 3",
//     imgSrc: "",
//   },
// ];

const ViewPage = props => {
  console.log({ props });
  const { data, pageContext } = props;
  if (!data || !pageContext) return <p>Loading...</p>;

  const {
    title,
    // start, end, total,
    currentPage,
    numPages,
    basePath,
  } = pageContext;

  return (
    <View
      title={title}
      data={data}
      // start={start}
      // end={end}
      // total={total}
      currentPage={currentPage}
      numPages={numPages}
      basePath={basePath}
    />
  );
};

export default withResourceLayout(ViewPage);
