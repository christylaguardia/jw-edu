import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

import "./styles.scss";

export const BookCard = ({ id, volumeInfo }) => {
  const { title, authors, publishedDate, imageLinks } = volumeInfo; // TODO: categories
  const publishedYear = publishedDate ? publishedDate.substring(0, 4) : null;
  const imageSrc =
    imageLinks?.thumbnail || imageLinks?.smallThumbnail || "https://bulma.io/images/placeholders/128x128.png";

  return (
    <div className="card card-equal-height">
      <div className="card-content">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <figure className="image" height={128}>
              <img src={imageSrc} alt={`${title}} by ${authors.join(" and ")}.`} />
            </figure>
          </div>

          <div className="column">
            <p className="title is-family-primary	is-5">{title}</p>
            <p className="subtitle">{authors.join(", ")}</p>
            {publishedYear && <p className="is-3 mt-0">{publishedYear}</p>}
            {/* Tags? */}
          </div>
        </div>
      </div>

      <div className="card-footer">
        {/* Read or Buy option */}
        <Link className="card-footer-item" to={`/book/${id}/details`}>
          Details
        </Link>
      </div>
    </div>
  );
};
