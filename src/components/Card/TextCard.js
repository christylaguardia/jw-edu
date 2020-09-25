import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const TextCard = ({ name, description, url, tags }) => (
  <div className="box">
    <div className="content">
      <div className="columns is-mobile">
        <div className="column">
          <p>
            <strong>{name}</strong>
            {description && (
              <>
                <br />
                <span>{description}</span>
              </>
            )}
          </p>
        </div>
        <div className="column is-narrow">
          <a target="_blank" rel="noreferrer" href={url}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
            </span>
          </a>
        </div>
      </div>
    </div>

    <div className="tags">
      {tags &&
        tags.map(({ id, tag }) => (
          <span key={id} className="tag is-small">
            {tag}
          </span>
        ))}
    </div>
  </div>
);
