import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

export const Breadcrumbs = () => {
  const paths = window.location.pathname.split("/").filter(value => value !== "");

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs" style={{ marginTop: "1rem" }}>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
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
