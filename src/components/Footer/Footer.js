import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

import { SITE_NAME, RESOURCE_TYPES } from "../../constants";

/**
 * TODO: Find more content
 * Privacy Policy
 * Terms of Use
 * Phone number
 * Email address
 * Address
 * Social icons
 */

export const Footer = ({ children }) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column has-text-left">
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
          <div className="column has-text-right is-narrow">
            {children}
            <p>&copy; 2020 {SITE_NAME}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
