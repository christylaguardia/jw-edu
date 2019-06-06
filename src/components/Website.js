import React from "react";

export const Website = ({ node }) => (
  <p>
    <a href={node.url.url} target="_blank" rel="noopener noreferrer">
        {node.title}
    </a>
    <span> </span>
    <span>
      {node.description.description}
    </span>
  </p>
);
