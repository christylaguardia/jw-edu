/* WIP */

import React from "react";

const tags = ["Blog", "Non-Profit", "Discussion Forum", "Legal", "Blood"];

export const WebsiteSearch = () => {
  // const handleClick = () => console.log("perform search...");

  return (
    <div className="container" style={{ marginBottom: "2rem" }}>
      <div className="columns">
        <div className="column is-full-mobile">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Find a website" />
            </p>
            {/* <p className="control">
              <a className="button is-info">Search</a>
            </p> */}
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
              <span className="tag is-medium">{tag}</span>
              {/* <div className="tags has-addons">
                <a className="tag is-medium is-link">{tag}</a>
                <a className="tag is-medium is-delete"></a>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};
