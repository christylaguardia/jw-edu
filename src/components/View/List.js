import React from "react";

export const List = ({ data }) => (
  <div className="columns is-multiline is-mobile">
    {data.map(({ id, title, subtitle, description, details, imgSrc }) => (
      <div key={id} className="column is-full">
        <div className="card box">
          <div className="card-content">
            <div className="columns is-mobile is-multiline">
              <div className="column is-narrow">
                <figure className="image is-128x128">
                  <img src={imgSrc || "https://bulma.io/images/placeholders/128x128.png"} alt={title} />
                </figure>
              </div>

              <div className="column">
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
