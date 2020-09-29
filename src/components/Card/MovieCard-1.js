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
  // Ratings,
  Runtime,
  override_poster_url,
  watch_url_prime_video,
  watch_url_youtube,
}) => {
  const imgSrc = !Poster ? null : Poster === "N/A" ? override_poster_url : Poster || null;
  const genre = !Genre || Genre === "N/A" ? null : Genre;
  const rated = !Rated || Rated === "N/A" ? null : `Rated ${Rated}`;
  const language = !Language || Language === "N/A" ? null : Language;
  const runtime = !Runtime || Runtime === "N/A" ? null : Runtime;
  const imdbUrl = !imdbID ? null : `https://www.imdb.com/title/${imdbID}`;
  const smallInfo = [rated, language, runtime].filter(value => !!value).join(" · ");

  const renderButtons = () => (
    <div className="buttons is-multiline">
      {imdbUrl && (
        <a className="button is-small is-text is-light" target="_blank" rel="noreferrer" href={imdbUrl}>
          IMDb
        </a>
      )}
      {watch_url_prime_video && (
        <a className="button is-small is-text is-light" target="_blank" rel="noreferrer" href={watch_url_prime_video}>
          Prime Video
        </a>
      )}
      {watch_url_youtube && (
        <a className="button is-small is-text is-light" target="_blank" rel="noreferrer" href={watch_url_youtube}>
          YouTube
        </a>
      )}
    </div>
  );

  const renderContents = () => (
    <div className="content">
      <p>
        <strong>{Title}</strong>
        {Year && (
          <>
            {" "}
            <small>({Year})</small>
          </>
        )}
        {genre && (
          <>
            <br /> <small>{genre}</small>
          </>
        )}
      </p>
      <p>{Plot && Plot !== "N/A" && <span>{Plot}</span>}</p>
      {smallInfo && (
        <p>
          <small>{smallInfo}</small>
        </p>
      )}
      {renderButtons()}
    </div>
  );

  if (!imgSrc) {
    return (
      <div className="box" style={{ height: "100%" }}>
        {renderContents()}
      </div>
    );
  }

  return (
    <div className="box" style={{ height: "100%" }}>
      <div className="columns is-multiline is-mobile">
        <div className="column is-full-mobile is-narrow">
          <figure className="image" style={{ height: "100%", width: "200px" }}>
            <img src={imgSrc} alt={Title} />
          </figure>
        </div>
        <div className="column is-full-mobile is-half-desktop">{renderContents()}</div>
      </div>
    </div>
  );
};
