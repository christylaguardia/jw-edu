import React from "react";

import BookCard from "../components/BookCard";
import BookListItem from "../components/BookListItem";
import BooksTable from "../components/BooksTable";

export const BooksView = ({ currentView, books }) => {
  switch (currentView) {
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
    case VIEW.LIST:
      return books.map(({ node }) => <BookListItem {...node} />);
    case VIEW.TABLE:
      return <BooksTable books={books} />;
    default:
      return null;
  }
};
