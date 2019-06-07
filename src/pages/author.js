import React from "react"
import { Link } from "gatsby"
import { Hero } from "../components/Hero";
import { Navigation } from '../components/Navigation';;

export default ({ pageContext }) => (
  <div>
    <Navigation />
    <Hero title={pageContext.name} />
    <div className="container">
      <div className="section">
        {pageContext.book && pageContext.book.map(book => (
          <p>
            <Link to={`/books/${book.id}`}>
              {book.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  </div>
);