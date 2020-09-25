import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

import { SITE_NAME } from "../../constants";

export const Footer = ({ children }) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column has-text-left">
            <Link className="navbar-item is-uppercase " to="/about">
              About
            </Link>
            <Link className="navbar-item is-uppercase " to="/contact">
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
