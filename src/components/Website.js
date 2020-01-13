import React from "react"

export const Website = ({ node }) => (
  <div className="columns">
    <div className="column is-one-fifth">
      <a href={node.url.url} target="_blank" rel="noopener noreferrer">
        {node.title}
      </a>
    </div>
    <div className="column">{node.description.description}</div>
  </div>
)
