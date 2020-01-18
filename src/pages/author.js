import React from "react"
// import Link from "gatsby"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"

export default ({ pageContext }) => (
  <>
    <Navigation />
    <Hero title={pageContext.name} />
    <div className="container">
      <div className="section">
        author
        {/* TODO */}
        {/* {pageContext.author &&
          pageContext.author.map(author => (
            <p key={author.id}>
              <Link to={`/authors/${author.id}`}>{author.title}</Link>
            </p>
          ))} */}
      </div>
    </div>
  </>
)
