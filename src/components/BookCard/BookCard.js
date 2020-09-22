import React from "react";
import { navigate } from "gatsby";

export const BookCard = ({ id, volumeInfo }) => {
  const { title, authors, categories, publishedDate, imageLinks } = volumeInfo;
  const path = `/book/${id}`;
  const publishedYear = publishedDate ? publishedDate.substring(0, 4) : null;
  const imageSrc =
    imageLinks?.thumbnail || imageLinks?.smallThumbnail || "https://bulma.io/images/placeholders/128x128.png";

  const handleClick = () => navigate(path);

  return (
    <div className="box" style={{ height: "100%" }} onClick={handleClick}>
      <div className="columns is-mobile">
        <div className="column is-narrow">
          <figure className="image" height={128}>
            <img src={imageSrc} />
          </figure>
        </div>
        <div className="column">
          <div className="content">
            <p className="title is-family-primary	is-5">{title}</p>
            <p className="subtitle">{authors.join(", ")}</p>
            {publishedYear && <p className="is-3 mt-0">{publishedYear}</p>}
          </div>

          {/* TODO: how to truncate? */}
          {/* <div
            style={{ width: "50%", overflow: "hidden", textOverflow: "ellipsis" }}
            dangerouslySetInnerHTML={{ __html: description }}
          /> */}
          {/* Tags? */}
        </div>
      </div>
    </div>
  );
};
