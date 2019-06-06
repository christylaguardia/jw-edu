import React from "react"
// import { Link, graphql } from "gatsby"
import { Hero } from "../components/Hero";
import { Navigation } from '../components/Navigation';;

export default ({ pageContext }) => (
  <div>
    <Navigation />
    <Hero title={pageContext.name} />
    <div className="container">
      <div className="section">
        <h3>Books</h3>
        {pageContext.book ? (
          <ul>
            {pageContext.book.map(book => <li key={book.id}>{book.title}</li>)}
          </ul>
        ) : (
          <p>none</p>
        )}

        {/* {pageContext.biography ? (
          <p>
            <a className="button is-text" href={pageContext.biography} target="_blank" rel="noopener noreferrer">
              {`Read ${pageContext.name}'s biography.`}
            </a>
          </p>
        ) : (
          <p>Biography not available</p>
        )} */}
      </div>
    </div>
  </div>
);