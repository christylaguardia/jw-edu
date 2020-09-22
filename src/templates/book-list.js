import React from "react";
import { graphql } from "gatsby";

import withPageLayout from "../components/Layout/withPageLayout";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

const BookList = ({ data, pageContext }) => {
  if (!data || !pageContext) return <p>Loading...</p>; // TODO:

  const { currentPage, limit, numPages, skip } = pageContext;
  const books = data.allMongodbGooglebooksapiVolumes.edges;

  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <>
      <Pagination basePath="books" currentPage={currentPage} limit={limit} numPages={numPages} skip={skip} />
      <div className="columns is-multiline is-mobile">
        {books.map(({ node }) => (
          <div key={node.id} className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
            <BookCard {...node} />
          </div>
        ))}
      </div>
    </>
  );
};

export const bookListQuery = graphql`
  query BookList($skip: Int!, $limit: Int!) {
    allMongodbGooglebooksapiVolumes(
      limit: $limit
      skip: $skip
      sort: { fields: volumeInfo___publishedDate, order: DESC }
      filter: { volumeInfo: { publishedDate: { ne: null } } }
    ) {
      edges {
        node {
          id
          selfLink
          volumeInfo {
            title
            subtitle
            authors
            imageLinks {
              thumbnail
            }
          }
        }
      }
    }
  }
`;

export default withPageLayout(BookList, "Books");
