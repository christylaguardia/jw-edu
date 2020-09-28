import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

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
          <div className="column has-text-right is-narrow">{children}</div>
        </div>
      </div>
    </div>
  </footer>
);
