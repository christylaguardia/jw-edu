import React, { useState } from "react";
import css from "classnames";
import Link from "gatsby-plugin-transition-link/AniLink";

export const Navigation = ({ siteName, menuItems }) => {
  const [isActive, setIsActive] = useState(false);
  const handleNavChange = () => setIsActive(!isActive);

  return (
    <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            {siteName.toUpperCase()}
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
              <span className="navbar-link is-uppercase">Resources</span>
              <div className="navbar-dropdown">
                {menuItems.map(({ slug, name }) => (
                  <Link key={slug} className="navbar-item is-uppercase" to={`/resources/${slug}`}>
                    {name}
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
