import React from "react";
// import Helmet from "gatsby-plugin-react-helmet";
import { format, compareAsc } from "date-fns";

import withPageLayout from "../components/Layout/withPageLayout";

const Book = ({ pageContext }) => {
  console.log({ pageContext });
  const { volumeInfo, accessInfo } = pageContext.node;
  const {
    title,
    subtitle,
    authors,
    description,
    imageLinks,
    publishedDate,
    pageCount,
    averageRating,
    ratingsCount,
  } = volumeInfo;
  const [year] = publishedDate.split("-");

  // viewer.load("ISBN:0738531367");

  return (
    <>
      {/* <Helmet title="foo bar" defer={false}>
        <script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script>
        <script type="text/javascript">google.books.load();</script>
      </Helmet> */}

      <div className="columns is-mobile">
        {imageLinks && (
          <div className="column is-one-third is-full-mobile">
            <figure className="image image is-2by3">
              <img src={imageLinks.small} alt={title} />
            </figure>

            <div className="container" style={{ marginTop: "1rem" }}>
              {accessInfo?.webReaderLink && (
                <a
                  className="button is-primary is-outlined"
                  target="_blank"
                  rel="noreferrer"
                  href={accessInfo.webReaderLink}>
                  Read
                </a>
              )}

              {/* {accessInfo?.embeddable && } */}

              {/* {averageRating && (
                <p>
                  {Array.from({ length: 5 }).forEach((_, i) => (
                    <span className={`icon${averageRating <= i ? "has-text-warning" : ""}`}>
                      <i className="fas fa-star"></i>
                    </span>
                  ))}
                  {ratingsCount && ` (${ratingsCount})`}
                </p>
              )} */}
            </div>
          </div>
        )}
        <div className="column is-full-mobile">
          <div className="content">
            <h1 className="title">{title}</h1>
            {subtitle && <h2 className="subtitle">{subtitle}</h2>}
            <p className="is-size-4">By {authors.join(", ")}</p>
            {year && <p>Published {year}</p>}
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default withPageLayout(Book);
