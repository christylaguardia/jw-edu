import React from "react"
import { Link } from "gatsby"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Resource from "../components/Resource"

export default ({ pageContext }) => (
  <>
    <Navigation />
    <Hero
      title={pageContext.title}
      subtitle={
        pageContext.authors && (
          <div>
            <span>By </span>
            {pageContext.authors.map(author => (
              <Link key={author.id} to={`/authors/${author.id}`}>
                {author.name}
              </Link>
            ))}
          </div>
        )
      }
    />
    <Resource
      id={pageContext.id}
      type={pageContext.type}
      tags={pageContext.tags}
      yearPublished={pageContext.yearPublished}
      description={pageContext.description}
      embedHtml={pageContext.embedHtml}
      purchaseUrl={pageContext.purchaseUrl}
    />
  </>
)
