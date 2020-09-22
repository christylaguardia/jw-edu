import React from "react";
import { navigate } from "gatsby";

export const BookCard = ({ id, volumeInfo }) => {
  const { title, authors, description, publishedDate, imageLinks } = volumeInfo;
  const publishedYear = publishedDate ? publishedDate.substring(0, 4) : null;
  const imageSrc =
    imageLinks?.thumbnail || imageLinks?.smallThumbnail || "https://bulma.io/images/placeholders/128x128.png";

  const handleClick = () => navigate(`/book/${id}`);

  return (
    <div className="box" onClick={handleClick}>
      <div className="columns is-mobile">
        <div className="column is-narrow">
          <figure className="image" height={128}>
            <img src={imageSrc} />
          </figure>
        </div>
        <div className="column">
          <div className="content">
            <p>
              <span>
                <strong>{title}</strong>
              </span>
              <br />
              <span>{authors.join(", ")}</span>
              <br />
              {publishedYear && <span>{publishedYear}</span>}
              {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
              <br />
            </p>
          </div>

          {/* <div className="columns is-mobile">
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
          </div> */}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="card" style={{ height: "100%" }} onClick={handleClick}>
  //     <div className="card-image">
  //       {/* <figure className="image is-2by3"> */}
  //       <figure className="image is-128x128">
  //         <img src={imageSrc} alt={title} />
  //       </figure>
  //     </div>
  //     <div className="card-content">
  //       <div className="media">
  //         <div className="media-content">
  //           <p className="title is-5">{title} </p>
  //           <p className="subtitle is-7">{authors.join(", ")}</p>
  //           {publishedYear && <p className="subtitle is-8">{publishedYear}</p>}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
