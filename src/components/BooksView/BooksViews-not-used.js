import React from "react";

import { BookCard } from "./BookCard";
import { BookListItem } from "./BookListItem";
import { BooksTable } from "./BooksTable";
import { VIEW, BooksViewSelector } from "./BooksViewSelector";

export const BooksView = ({ start, end, total, currentView, setCurrentView, books }) => {
  const renderView = () => {
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

  return (
    <>
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
            <BooksViewSelector currentView={currentView} handleClick={setCurrentView} />
          </div>
        </div>
      </div>
      {renderView()}
    </>
  );
};
