import React from "react"
import { Link } from "gatsby"

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    const showHamburger = this.state.isActive ? 'is-active' : '';
    return (
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              JW Catalog
            </Link>
            <div className={`navbar-burger burger ${showHamburger}`} onClick={this.toggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarBasicExample" className={`navbar-menu ${showHamburger}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/authors">
                Authors
              </Link>
              <Link className="navbar-item" to="/books">
                Books
              </Link>
              <Link className="navbar-item" to="/websites">
                Websites
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            {/* TODO: ignore missing href */}
            {/* <a role="button" className={`navbar-burger ${this.state.isActive && 'is-active'}`} aria-label="menu" aria-expanded="false" onClick={this.toggle}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
          </div>
        </nav>
      </div>
    );
  }
}
