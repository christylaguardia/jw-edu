import React from "react";

export const WebsiteCard = ({ name, url, tags }) => (
  <div className="card" style={{ height: "100%" }}>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-5">{name}</p>
          <a target="_blank" rel="noreferrer" href={url}>
            GO
          </a>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="tags are-medium">
        {tags &&
          tags.map(({ id, tag }) => (
            <span key={id} className="tag">
              {tag}
            </span>
          ))}
      </div>
    </div>
  </div>
);
