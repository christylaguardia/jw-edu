import React, { useState } from "react";
import { graphql } from "gatsby";

import withPageLayout from "../hocs/withPageLayout";
import BookSearch from "../components/BookSearch";

import Pagination from "../components/Pagination";
import { BooksView } from "../components/BooksView/BooksView";

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
      <div className="level">
        <div className="level-right">
          <div className="level-item">
            <div className="content">
              <p>
                Displaying {start} - {end} of {total} books
              </p>
            </div>
          </div>
        </div>
        <div className="level-left" style={{ justifyContent: "flex-end" }}>
          <div className="level-item">
            <ViewSelector currentView={currentView} handleClick={setCurrentView} />
          </div>
        </div>
      </div>
      <BooksView currentView={currentView} books={books} />
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
