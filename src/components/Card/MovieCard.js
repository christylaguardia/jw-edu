import React from "react";

import "./styles.scss";

export const MovieCard = ({
  imdbID,
  Title,
  Year,
  Genre,
  Rated,
  Language,
  Plot,
  Poster,
  // Ratings,
  Runtime,
  override_poster_url,
  watch_url_prime_video,
  watch_url_youtube,
}) => {
  const imgSrc = !Poster
    ? null
    : Poster === "N/A"
    ? override_poster_url
    : Poster || "https://bulma.io/images/placeholders/128x128.png";
  const genre = !Genre || Genre === "N/A" ? null : Genre;
  const plot = !Plot || Plot === "N/A" ? null : Plot;
  const rated = !Rated || Rated === "N/A" ? null : `Rated ${Rated}`;
  const language = !Language || Language === "N/A" ? null : Language;
  const runtime = !Runtime || Runtime === "N/A" ? null : Runtime;
  const imdbUrl = !imdbID ? null : `https://www.imdb.com/title/${imdbID}`;
  const smallInfo = [rated, language, runtime].filter(value => !!value).join(" · ");

  return (
    <div className="card card-equal-height">
      <div className="card-content">
        <div className="columns is-mobile is-multiline">
          <div className="column is-narrow">
            <figure className="image card-figure">
              <img src={imgSrc} alt={Title} />
            </figure>
          </div>

          <div className="column is-half-desktop">
            <p className="title is-family-primary	is-5">
              <strong>{Title}</strong>
              {Year && (
                <>
                  {" "}
                  <small>({Year})</small>
                </>
              )}
            </p>
            {genre && <p className="subtitle">{genre}</p>}
            {plot && <p>{plot}</p>}
            {smallInfo && <p className="is-3 mt-0">{smallInfo}</p>}
          </div>
        </div>
      </div>

      <div className="card-footer">
        {imdbUrl && (
          <a className="card-footer-item" target="_blank" rel="noreferrer" href={imdbUrl}>
            Read more on IMDb
          </a>
        )}
        {watch_url_prime_video && (
          <a className="card-footer-item" target="_blank" rel="noreferrer" href={watch_url_prime_video}>
            Watch on Prime Video
          </a>
        )}
        {watch_url_youtube && (
          <a className="card-footer-item" target="_blank" rel="noreferrer" href={watch_url_youtube}>
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
};
