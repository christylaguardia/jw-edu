import React from "react";

export const ImageCard = ({ name, url, tags }) => (
  <div className="box">
    <div className="columns is-mobile">
      <div className="column is-narrow">
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt={name} />
        </figure>
      </div>
      <div className="column">
        <div className="content">
          <p>
            <strong>{name}</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>

        <div className="columns is-mobile">
          <div className="column">
            <div className="tags">
              {tags &&
                tags.map(({ id, tag }) => (
                  <span key={id} className="tag is-small">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
          <div className="column is-narrow is-right">
            <a className="" target="_blank" rel="noreferrer" href={url}>
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
