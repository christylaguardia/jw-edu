import React from "react";

const tags = ["Cults", "Autobiography", "History", "Recovery", "Fiction"];

export const BookSearch = () => {
  return (
    <section className="hero is-light box">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Search Books</h1>
          <div className="columns">
            <div className="column is-full-mobile">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Find a book" />
                </p>
                <p className="control">
                  <a className="button is-info">Search</a>
                </p>
              </div>
            </div>

            <div className="column is-full-mobile is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Sort By...</option>
                    <option>Recent</option>
                    <option>Name (ascending) </option>
                    <option>Name (descending) </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-grouped is-grouped-multiline">
            {tags &&
              tags.sort().map(tag => (
                <div key={tag} className="control">
                  <div className="tags has-addons">
                    <a className="tag is-medium is-link">{tag}</a>
                    <a className="tag is-medium is-delete"></a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
