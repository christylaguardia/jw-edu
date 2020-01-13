import React from "react"
import { Link } from "gatsby"
import { Hero } from "../components/Hero"
import { Navigation } from "../components/Navigation"

export default ({ pageContext }) => (
  <>
    <Navigation />
    <Hero title={pageContext.name} />
    <div className="container">
      <div className="section">
        {pageContext.book &&
          pageContext.book.map(book => (
            <p key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </p>
          ))}
      </div>
    </div>
  </>
)
