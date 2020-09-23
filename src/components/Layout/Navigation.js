import React, { useState } from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

import { SITE_NAME, RESOURCE_TYPE } from "../../constants";

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveClassName = isActive ? "is-active" : "";

  const handleNavChange = () => setIsActive(!isActive);

  return (
    <>
      <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
        <div className="container ">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              {SITE_NAME.toUpperCase()}
            </Link>
            <div
              role="button"
              tabIndex={0}
              onClick={handleNavChange}
              onKeyPress={handleNavChange}
              className={`navbar-burger burger ${isActiveClassName}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="hamburger-menu" className={`navbar-menu ${isActiveClassName}`}>
            <div className="navbar-end">
              {Object.values(RESOURCE_TYPE).map(resource => (
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
