import React, { useState } from "react";
import { graphql } from "gatsby";

import withPageLayout from "../components/Layout/withPageLayout";
import Pagination from "../components/Pagination";
import BookSearch from "../components/BookSearch";
import { BooksView } from "../components/BooksView/BooksView";

import { VIEW } from "../constants";

const BookList = ({ data, pageContext }) => {
  const [currentView, setCurrentView] = useState(VIEW.CARD);

  // TODO: does this ever happen?
  if (!data || !pageContext) return <p>Loading...</p>;

  const { currentPage, limit, numPages, total } = pageContext;
  const books = data.allMongodbGooglebooksapiVolumes.edges;

  if (!books || books.length === 0) return <p>No books found.</p>;

  const start = currentPage === 1 ? 1 : currentPage * limit;
  const end = start + (limit - 1);

  return (
    <>
      <BookSearch start={start} end={end} total={total} />
      <BooksView
        start={start}
        end={end}
        total={total}
        currentView={currentView}
        setCurrentView={setCurrentView}
        books={books}
      />
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

export default withPageLayout(BookList, "Books");
