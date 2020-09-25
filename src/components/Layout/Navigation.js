import React, { useState } from "react";
import css from "classnames";
import Link from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SITE_NAME, RESOURCE_INFO } from "../../constants";

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const handleNavChange = () => setIsActive(!isActive);

  return (
    <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            {SITE_NAME.toUpperCase()}
          </Link>
          <div
            role="button"
            tabIndex={0}
            onClick={handleNavChange}
            onKeyPress={handleNavChange}
            className={css("navbar-burger", "burger", { "is-active": isActive })}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="hamburger-menu" className={css("navbar-menu", { "is-active": isActive })}>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-uppercase">Resources</a>
              <div className="navbar-dropdown">
                {RESOURCE_INFO.map(({ path, title }) => (
                  <Link className="navbar-item is-uppercase" key={path} to={`/${path}`}>
                    {title}
                  </Link>
                ))}
              </div>
            </div>

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
  );
};
