import React, { useState } from "react";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faThLarge, faTable } from "@fortawesome/free-solid-svg-icons";
import css from "classNames";

import withPageLayout from "../components/Layout/withPageLayout";
import BookSearch from "../components/BookSearch";
import BookCard from "../components/BookCard";
import BookListItem from "../components/BookListItem";
import Pagination from "../components/Pagination";

const VIEW = Object.freeze({
  CARD: "card",
  LIST: "list",
  TABLE: "table",
});

const ViewSelector = ({ currentView, handleClick }) => (
  <div className="field has-addons">
    <p className="control">
      <button
        className={css("button", { "is-dark": currentView === VIEW.CARD })}
        onClick={() => handleClick(VIEW.CARD)}>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faThLarge} size="1x" />
        </span>
        <span>Card</span>
      </button>
    </p>
    <p className="control">
      <button
        className={css("button", { "is-dark": currentView === VIEW.LIST })}
        onClick={() => handleClick(VIEW.LIST)}>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faList} size="1x" />
        </span>
        <span>List</span>
      </button>
    </p>
    <p className="control">
      <button
        className={css("button", { "is-dark": currentView === VIEW.TABLE })}
        onClick={() => handleClick(VIEW.TABLE)}>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faTable} size="1x" />
        </span>
        <span>Table</span>
      </button>
    </p>
  </div>
);

const BookList = ({ data, pageContext }) => {
  const [currentView, setCurrentView] = useState(VIEW.CARD);

  // TODO: does this ever happen?
  if (!data || !pageContext) return <p>Loading...</p>;

  const { currentPage, limit, numPages, total } = pageContext;
  const books = data.allMongodbGooglebooksapiVolumes.edges;

  if (!books || books.length === 0) return <p>No books found.</p>;

  const start = currentPage === 1 ? 1 : currentPage * limit;
  const end = start + (limit - 1);

  const renderView = () => {
    switch (currentView) {
      case VIEW.LIST:
        return books.map(({ node }) => <BookListItem {...node} />);
      case VIEW.TABLE:
        return (
          <table className="table">
            <thead>
              <th>Title</th>
              <th>Author</th>
              <th>Published</th>
            </thead>
            <tbody>
              {books.map(({ node }) => (
                <tr>
                  <td>{node.volumeInfo?.title}</td>
                  <td>{node.volumeInfo?.authors.join(", ")}</td>
                  <td>{node.volumeInfo?.publishedDate ? node.volumeInfo?.publishedDate.substring(0, 4) : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case VIEW.CARD:
        return (
          <div className="columns is-multiline is-mobile">
            {books.map(({ node }) => (
              <div key={node.id} className="column is-full-mobile is-one-half-tablet is-one-third-desktop">
                <BookCard {...node} />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

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

      {renderView()}

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
