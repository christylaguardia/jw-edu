import React from "react";
// import { navigate } from "gatsby";
import Link from "gatsby-plugin-transition-link/AniLink";
// import { encode } from "qss";

export const Search = () => {
  // const [resource, setResource] = useState(RESOURCE_TYPE.BOOKS);
  // const [keyword, setKeyword] = useState("");

  // const handleResourceChange = event => setResource(event.target.value);
  // const handleKeywordChange = event => setKeyword(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    // navigate(`/${resource}?${encode({ search: keyword })}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons is-horizontal">
          <div className="field-body">
            <p className="control">
              {/* <span className="select is-fullwidth">
                <select name="resource">
                  {Object.values(RESOURCE_TYPE).map(resource => (
                    <option key={resource} value={resource}>{`${resource.charAt(0).toUpperCase()}${resource.slice(
                      1
                    )}`}</option>
                  ))}
                </select>
              </span> */}
            </p>
            <div className="control is-expanded">
              <input className="input is-fullwidth" name="keyword" type="text" placeholder="Enter a search..." />
            </div>
            <div className="control">
              <button className="button is-dark is-fullwidth" type="submit" disabled={true}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      <Link className="button is-text" to="/about">
        Advanced search
      </Link>
    </div>
  );
};
