import React from "react";

import withResourceLayout from "../components/Layout/withResourceLayout";
import Pagination from "../components/Pagination";
import { BookCard } from "../components/Card/BookCard";

const BookList = ({ data, pageContext }) => {
  if (!data || !pageContext) return null;

  const { currentPage, numPages } = pageContext;
  // // const { currentPage, limit, numPages, total } = pageContext;
  const books = data.allMongodbJwresearchGooglebooksapi.edges;

  if (!books || books.length === 0) return <p>No books found.</p>;

  // const start = currentPage === 1 ? 1 : currentPage * limit;
  // const end = start + (limit - 1);

  return (
    <>
      <div className="columns is-multiline is-mobile">
        {books.map(({ node }) => (
          <div key={node.id} className="column is-full-mobile is-half-tablet is-one-third-fullhd">
            <BookCard {...node} />
          </div>
        ))}
      </div>
      <Pagination basePath="books" currentPage={currentPage} numPages={numPages} />
    </>
  );
};

/* Ignore the error.. */
export const bookListQuery = graphql`
  query BookList($skip: Int!, $limit: Int!) {
    allMongodbJwresearchGooglebooksapi(
      limit: $limit
      skip: $skip
      sort: { fields: volumeInfo___publishedDate, order: DESC }
      filter: { volumeInfo: { publishedDate: { ne: null } } }
    ) {
      edges {
        node {
          id
          volumeInfo {
            title
            authors
            categories
            publishedDate
            imageLinks {
              thumbnail
            }
          }
        }
      }
    }
  }
`;

export default withResourceLayout(BookList);
