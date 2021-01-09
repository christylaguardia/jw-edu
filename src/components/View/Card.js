import React from "react";

import "./Card.scss";

export const Card = ({ data }) => (
  <div className="columns is-multiline is-mobile">
    {data.map(({ id, title, subtitle, description, details, imgSrc }) => (
      <div key={id} className="column is-full-mobile is-one-half-tablet is-one-third-desktop">
        <div className="card box card-equal-height">
          <div className="card-content">
            <div className="columns is-mobile is-multiline">
              <div className="column is-full-mobile">
                <figure className="image card-figure">
                  <img src={imgSrc || "https://bulma.io/images/placeholders/128x128.png"} alt={title} />
                </figure>
              </div>

              <div className="column is-full-mobile">
                <p className="title is-family-primary	is-5">
                  <strong>{title}</strong>
                </p>
                {subtitle && <p className="subtitle">{subtitle}</p>}
                {description && <p>{description}</p>}
                {details && <p className="is-3 mt-0">{details}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
