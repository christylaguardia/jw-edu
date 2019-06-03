import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="container">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            JW Edu
          </Link>

          <Link className="navbar-item" to="/authors">
            Authors
          </Link>

          <Link className="navbar-item" to="/books">
            Books
          </Link>

          <Link className="navbar-item" to="/websites">
            Websites
          </Link>

        </div>
        {/* TODO: ignore missing href */}
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  </div>
);
