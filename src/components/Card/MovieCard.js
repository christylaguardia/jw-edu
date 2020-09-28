import React from "react";

export const MovieCard = ({
  imdbID,
  Title,
  Year,
  Genre,
  Rated,
  Language,
  Plot,
  Poster,
  override_poster_url,
  // Ratings,
  Runtime,
}) => {
  const imgSrc = Poster === "N/A" ? override_poster_url : Poster;
  const genre = Genre === "N/A" ? null : Genre;
  const rated = Rated === "N/A" ? null : `Rated ${Rated}`;
  const language = Language === "N/A" ? null : Language;
  const runtime = Runtime === "N/A" ? null : Runtime;
  const url = `https://www.imdb.com/title/${imdbID}`;
  const smallInfo = [rated, language, runtime].filter(value => !!value).join(" · ");

  return (
    <div className="box" style={{ height: "100%" }}>
      <div className="columns is-multiline is-mobile">
        <div className="column is-full-mobile is-narrow">
          <figure className="image" style={{ height: "100%", width: "200px" }}>
            <img src={imgSrc} alt={Title} />
          </figure>
        </div>
        <div className="column is-full-mobile is-half-desktop">
          <div className="content">
            <p>
              <strong>{Title}</strong> <small>({Year})</small>
              <br />
              {genre && (
                <>
                  {" "}
                  <small>{genre}</small>
                </>
              )}
            </p>
            <p>{Plot}</p>
            <p>
              <small>
                {smallInfo}
                {smallInfo && " · "}
                <a href={url} target="_blank" rel="noreferrer">
                  IMDb
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
