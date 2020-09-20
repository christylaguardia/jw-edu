import React from "react";
import { navigate } from "gatsby";

export const BookCard = ({ id, volumeInfo }) => {
  const { title, authors, publishedDate, imageLinks } = volumeInfo;
  const publishedYear = publishedDate ? publishedDate.substring(0, 4) : null;

  const handleClick = () => navigate(`/book/${id}`);

  return (
    <div className="card" style={{ height: "100%" }} onClick={handleClick}>
      <div className="card-image">
        <figure className="image image is-2by3">
          <img
            src={imageLinks ? imageLinks.thumbnail : "https://bulma.io/images/placeholders/300x300.png"}
            alt={title}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{title} </p>
            <p className="subtitle is-7">{authors.join(", ")}</p>
            {publishedYear && <p className="subtitle is-8">{publishedYear}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
