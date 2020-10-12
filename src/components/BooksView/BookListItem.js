import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

export const BookListItem = ({ id, volumeInfo }) => {
  const { title, authors, publishedDate, imageLinks } = volumeInfo;
  const publishedYear = publishedDate ? publishedDate.substring(0, 4) : null;
  const imageSrc = imageLinks?.smallThumbnail || "https://bulma.io/images/placeholders/64x64.png";

  return (
    <div className="media box" style={{ height: "100%" }}>
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={imageSrc} alt={`${title}} by ${authors.join(" and ")}.`} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="title is-family-primary	is-5">{title}</p>
          <p className="subtitle">{authors.join(", ")}</p>
          {publishedYear && <p className="is-3 mt-0">{publishedYear}</p>}
          <Link className="button is-link" to={`/book/${id}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
