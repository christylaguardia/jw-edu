import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "classnames";
import Link from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteMenuShape } from "../../constants/propShapes";
import ICONS from "../../constants/icons";
import PATHS from "../../constants/paths";

import "./Navigation.scss";

export const Navigation = ({ siteName, siteMenu }) => {
  const [isActive, setIsActive] = useState(false);
  const handleNavChange = () => setIsActive(!isActive);

  return (
    <nav className="navigation navbar has-background-light is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to={PATHS.HOME}>
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
            <div className="navbar-item content-mobile">
              <span className="navbar-link is-uppercase">Resources</span>
              <div className="navbar-dropdown">
                {siteMenu.map(({ slug, title }) => (
                  <Link key={slug} className="navbar-item is-uppercase" to={`/resources/${slug}`}>
                    <span className="icon" style={{ marginRight: "8px" }}>
                      <FontAwesomeIcon icon={ICONS[slug]} size="1x" />
                    </span>
                    <span>{title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link className="navbar-item is-uppercase" to={PATHS.ABOUT}>
              About
            </Link>
            <Link className="navbar-item is-uppercase" to={PATHS.CONTACT}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  siteName: PropTypes.string.isRequired,
  siteMenu: siteMenuShape,
};
