import React from "react";

export default ({ node }) => (
  <div>
    <p>
      <a className="button is-text" href={node.url.url} target="_blank" rel="noopener noreferrer">
        {node.title}
      </a>
    </p>
    <p>
      {node.description.description}
    </p>
  </div>
);
