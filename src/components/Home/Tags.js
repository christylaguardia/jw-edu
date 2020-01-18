import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

const Tags = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="tags are-medium is-centered">
        {data.allContentfulTag.edges.map(({ node }) => (
          <Link key={node.id} to={`/tags/${node.id}`} className="tag is-link">
            {node.tag}
          </Link>
        ))}
      </div>
    )}
  />
)

const query = graphql`
  {
    allContentfulTag(sort: { fields: [tag], order: ASC }) {
      edges {
        node {
          id
          tag
        }
      }
    }
  }
`

export default Tags
