import React from "react";
import { navigate } from "gatsby";

export const BookListItem = ({ id, volumeInfo }) => {
  const { title, authors, publishedDate, imageLinks } = volumeInfo;
  const path = `/book/${id}`;
  const publishedYear = publishedDate ? publishedDate.substring(0, 4) : null;
  const imageSrc = imageLinks?.smallThumbnail || "https://bulma.io/images/placeholders/64x64.png";

  const handleClick = () => navigate(path);

  return (
    <div className="media box" style={{ height: "100%" }} onClick={handleClick}>
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={imageSrc} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="title is-family-primary	is-5">{title}</p>
          <p className="subtitle">{authors.join(", ")}</p>
          {publishedYear && <p className="is-3 mt-0">{publishedYear}</p>}
        </div>
      </div>
    </div>
  );
};
