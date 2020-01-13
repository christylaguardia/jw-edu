import React from "react"
import { graphql, Link } from "gatsby"
import { Hero } from "../components/Hero"
import { Navigation } from "../components/Navigation"

export default ({ data }) => (
  <div>
    <Navigation />
    <Hero title="Books" />
    <div className="container">
      <div className="section">
        <div class="content">
          {data &&
            data.allContentfulBook.edges.map(({ node }) => (
              <p key={node.id}>
                <Link to={`/books/${node.id}`}>{node.title}</Link>
                {node.authors && (
                  <>
                    <span> by </span>
                    {node.authors.map(author => (
                      <Link key={author.id} to={`/authors/${author.id}`}>{author.name}</Link>
                    ))}
                  </>
                )}
              </p>
            ))}
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  {
    allContentfulBook {
      edges {
        node {
          id
          title
          authors {
            id
            name
          }
        }
      }
    }
  }
`
