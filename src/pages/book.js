import React from "react"
import { Link } from "gatsby"
import { Hero } from "../components/Hero"
import { Navigation } from "../components/Navigation"

export default ({
  pageContext: {
    title,
    authors,
    amazonHtml,
    description,
    publishDate,
    isbns,
    tags,
  },
}) => (
  <div>
    <Navigation />
    <Hero
      title={title}
      subtitle={
        authors && (
          <div>
            By{" "}
            {authors.map(author => (
              <Link key={author.id} to={`/authors/${author.id}`}>{author.name}</Link>
            ))}
          </div>
        )
      }
    />
    <div className="container">
      <div className="columns">
        {amazonHtml && (
          <div className="column is-one-third">
            <div className="container">
              <div className="section">
                <div dangerouslySetInnerHTML={{ __html: amazonHtml }} />
              </div>
            </div>
          </div>
        )}
        <div className="column">
          <div className="container">
            <div className="section">
              <div class="content">
                <p className="has-text-grey	has-text-weight-semibold">
                  Description
                </p>
                <p>{description.description}</p>
                <p className="has-text-grey	has-text-weight-semibold">
                  Published
                </p>
                <p>{publishDate}</p>
                {isbns && (
                  <>
                    <p className="has-text-grey	has-text-weight-semibold">
                      ISBN
                    </p>
                    <p>{isbns.map(({ isbn }) => isbn).join(", ")}</p>
                  </>
                )}
                {tags && (
                  <div className="tags are-medium">
                    {tags.map(tag => (
                      <Link key={tag.id} to={`/tags/${tag.id}`} className="tag is-link">
                        {tag.tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
