import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-plugin-transition-link/AniLink";

import { siteMenuShape } from "../../constants/propShapes";
import PATHS from "../../constants/paths";

export const Footer = ({ siteMenu, children }) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column has-text-left is-narrow">
            {siteMenu.map(({ title, slug }) => (
              <Link className="navbar-item is-uppercase" key={slug} to={`/${slug}`}>
                {title}
              </Link>
            ))}
          </div>
          <div className="column has-text-left is-narrow">
            <Link className="navbar-item is-uppercase " to={PATHS.ABOUT}>
              About
            </Link>
            <Link className="navbar-item is-uppercase " to={PATHS.CONTACT}>
              Contact
            </Link>
          </div>
          <div className="column has-text-right">{children}</div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteMenu: siteMenuShape,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
