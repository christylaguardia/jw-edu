import React from "react";
import PropTypes from "prop-types";

import PageLink from "./PageLink";

// TODO: pagination-ellipsis when there are a lot of pages

export const Pagination = ({ basePath, currentPage, numPages }) => {
  const pageList = Array.from(Array(numPages).keys());
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <>
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        {isFirst ? (
          <span className="pagination-previous">Previous</span>
        ) : (
          <PageLink className="pagination-previous" basePath={basePath} text="Previous" number={prevPage} />
        )}
        {isLast ? (
          <span className="pagination-next">Next</span>
        ) : (
          <PageLink className="pagination-next" basePath={basePath} text="Next" number={nextPage} />
        )}

        <ul className="pagination-list">
          {pageList.map((_, i) => {
            const pageNumber = i + 1;
            const className = `pagination-link${pageNumber === currentPage ? " is-current" : ""}`;

            return (
              <li key={pageNumber}>
                <PageLink
                  className={className}
                  basePath={basePath}
                  text={pageNumber === 1 ? 1 : pageNumber}
                  number={pageNumber === 1 ? 0 : pageNumber}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  basePath: PropTypes.string.isRequired,
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
