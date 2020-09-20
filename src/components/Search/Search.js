import React, { useState } from "react";
import { navigate } from "gatsby";
import Link from "gatsby-plugin-transition-link/AniLink";
import { encode } from "qss";

import { RESOURCE_TYPES } from "../../constants";

export const Search = () => {
  const [resource, setResource] = useState(RESOURCE_TYPES.BOOKS);
  const [keyword, setKeyword] = useState("");

  const handleResourceChange = event => setResource(event.target.value);
  const handleKeywordChange = event => setKeyword(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/${resource}?${encode({ search: keyword })}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <p className="control">
            <span className="select">
              <select name="resource" value={resource} onChange={handleResourceChange}>
                {Object.values(RESOURCE_TYPES).map(resource => (
                  <option value={resource}>{`${resource.charAt(0).toUpperCase()}${resource.slice(1)}`}</option>
                ))}
              </select>
            </span>
          </p>
          <div className="control is-expanded">
            <input
              className="input"
              name="keyword"
              type="text"
              placeholder="Enter a search..."
              value={keyword}
              onChange={handleKeywordChange}
            />
          </div>
          <div className="control">
            <button className="button is-info" type="submit" disabled={!resource || !keyword}>
              Search
            </button>
          </div>
        </div>
      </form>

      <Link className="button is-text" to="/about">
        Advanced search
      </Link>
    </div>
  );
};
