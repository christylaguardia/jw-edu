import React from "react";
import { graphql } from "gatsby";

import withPageLayout from "../components/Layout/withPageLayout";
import BookSearch from "../components/BookSearch";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

const BookList = ({ data, pageContext }) => {
  if (!data || !pageContext) return <p>Loading...</p>; // TODO:

  const { currentPage, limit, numPages, skip } = pageContext;
  const books = data.allMongodbGooglebooksapiVolumes.edges;

  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <>
      <BookSearch />
      <div className="columns is-multiline is-mobile">
        {books.map(({ node }) => (
          <div key={node.id} className="column is-full-mobile is-one-half-tablet is-one-third-desktop">
            <BookCard {...node} />
          </div>
        ))}
      </div>
      <Pagination basePath="books" currentPage={currentPage} limit={limit} numPages={numPages} skip={skip} />
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
            description
            imageLinks {
              smallThumbnail
              thumbnail
              small
              medium
              large
              extraLarge
            }
            publishedDate
            pageCount
            averageRating
            ratingsCount
          }
          accessInfo {
            webReaderLink
            embeddable
          }
        }
      }
    }
  }
`;

export default withPageLayout(BookList, "Books");
