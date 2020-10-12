import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

import PATHS from "../../constants/paths";

export const Breadcrumbs = () => {
  const paths = window.location.pathname.split("/").filter(value => value !== "");

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs" style={{ marginTop: "1rem" }}>
      <div className="container">
        <ul>
          <li>
            <Link to={PATHS.HOME}>Home</Link>
          </li>
          {paths.map((path, index) => (
            <li key={path} className={index === paths.length - 1 ? "is-active" : ""}>
              <Link to={path}>{path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
