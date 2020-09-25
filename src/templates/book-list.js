import React from "react";
import { graphql } from "gatsby";

import withPageLayout from "../components/Layout/withPageLayout";
import Pagination from "../components/Pagination";
import { BookCard } from "../components/BooksView/BookCard";

const BookList = ({ data, pageContext }) => {
  if (!data || !pageContext) return <p>Loading...</p>;

  const { currentPage, limit, numPages, total } = pageContext;
  const books = data.allMongodbGooglebooksapiVolumes.edges;

  if (!books || books.length === 0) return <p>No books found.</p>;

  const start = currentPage === 1 ? 1 : currentPage * limit;
  const end = start + (limit - 1);

  return (
    <>
      <div className="columns is-multiline is-mobile">
        {books.map(({ node }) => (
          <div key={node.id} className="column is-full-mobile is-half-tablet is-one-third-desktop">
            <BookCard {...node} />
          </div>
        ))}
      </div>
      <Pagination basePath="books" currentPage={currentPage} numPages={numPages} />
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

export default withPageLayout(BookList);
