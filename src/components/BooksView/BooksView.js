import React from "react";

import { BookCard } from "../Card/BookCard";

export const BooksView = ({ start, end, total, books }) => (
  <>
    <div className="level">
      <div className="level-right is-narrow">
        <div className="level-item">
          <div className="content">
            <p>
              Displaying {start} - {end} of {total}
            </p>
          </div>
        </div>
      </div>

      <div className="level-left" style={{ justifyContent: "flex-end" }}>
        <div className="level-item">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">{/* Sort By */}</label>
            </div>
            <div className="field-body">
              <div className="control">
                <div className="select">
                  <select>
                    <option>Sort By...</option>
                    <option>Recent</option>
                    <option>Name (ascending) </option>
                    <option>Name (descending) </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field-label is-normal">
              <label className="label">{/* View Per Page */}</label>
            </div>
            <div className="field-body">
              <div className="control">
                <div className="select">
                  <select>
                    <option>View Per Page...</option>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="columns is-multiline is-mobile">
      {books.map(({ node }) => (
        <div key={node.id} className="column is-full-mobile is-half-tablet is-one-third-desktop">
          <BookCard {...node} />
        </div>
      ))}
    </div>
  </>
);
