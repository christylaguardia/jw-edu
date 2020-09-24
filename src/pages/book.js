import React from "react";
// import Helmet from "gatsby-plugin-react-helmet";
// import { format, compareAsc } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import withPageLayout from "../components/Layout/withPageLayout";

const Book = ({ pageContext }) => {
  if (!pageContext.node) return null;

  const { volumeInfo, accessInfo, saleInfo } = pageContext.node;
  const {
    title,
    subtitle,
    authors,
    categories,
    description,
    industryIdentifiers,
    imageLinks,
    publishedDate,
    pageCount,
    averageRating,
    ratingsCount,
  } = volumeInfo;

  const identifiers =
    industryIdentifiers && industryIdentifiers.map(({ type, identifier }) => `${type}: ${identifier}`).join(", ");

  const imageSrc =
    imageLinks?.large ||
    imageLinks?.medium ||
    imageLinks?.small ||
    imageLinks?.thumbnail ||
    imageLinks?.smallThumbnail ||
    "https://bulma.io/images/placeholders/300x300.png";

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
              <img src={imageSrc} alt={title} />
            </figure>

            <div className="container" style={{ marginTop: "1rem" }}>
              <div className="buttons">
                {accessInfo?.webReaderLink && (
                  <a className="button is-dark" target="_blank" rel="noreferrer" href={accessInfo.webReaderLink}>
                    Read
                  </a>
                )}
                {/* TODO: what other saleability values/ */}
                {saleInfo?.saleability === "FOR_SALE" && saleInfo?.buyLink && (
                  <a className="button is-dark" target="_blank" rel="noreferrer" href={saleInfo.buyLink}>
                    Buy from GooglePlay
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="column is-full-mobile">
          <div className="content">
            <h1 className="title">{title}</h1>
            {subtitle && <h2 className="subtitle">{subtitle}</h2>}
            <p className="is-size-4">By {authors.join(", ")}</p>
            <p className="is-size-4">{publishedDate}</p>

            {description ? (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              <p>
                <em>Description not available :(</em>
              </p>
            )}

            <br />

            {pageCount && <p>Page Count: {pageCount} </p>}
            {identifiers && <p>{identifiers} </p>}
            {averageRating !== undefined && (
              <p>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon
                    key={`star-${i}`}
                    icon={faStar}
                    size="1x"
                    color={averageRating >= i ? "orange" : "gray"}
                  />
                ))}
                {ratingsCount && ` (${ratingsCount})`}
              </p>
            )}

            <div className="tags">
              {categories &&
                categories.map(category => (
                  <span key={category} className="tag is-small">
                    {category}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withPageLayout(Book);
