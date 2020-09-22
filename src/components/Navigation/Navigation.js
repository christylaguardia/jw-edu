import React, { useState } from "react";
import Link from "gatsby-plugin-transition-link/AniLink";
import { SITE_NAME, RESOURCE_TYPES } from "../../constants";

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveClassName = isActive ? "is-active" : "";

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              {SITE_NAME.toUpperCase()}
            </Link>
            <div className={`navbar-burger burger ${isActiveClassName}`} onClick={() => setIsActive(!isActive)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="hamburger-menu" className={`navbar-menu ${isActiveClassName}`}>
            <div className="navbar-end">
              {Object.values(RESOURCE_TYPES).map(resource => (
                <Link key={resource} className="navbar-item is-uppercase" to={`/${resource}`}>
                  {resource}
                </Link>
              ))}
              <Link className="navbar-item is-uppercase" to="/about">
                About
              </Link>
              <Link className="navbar-item is-uppercase" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
