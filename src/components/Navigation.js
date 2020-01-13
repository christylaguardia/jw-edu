import React from "react"
import { Link } from "gatsby"

export class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const showHamburger = this.state.isActive ? "is-active" : ""
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              JW Educational Resource
            </Link>
            <div
              className={`navbar-burger burger ${showHamburger}`}
              onClick={this.toggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="hamburger-menu" className={`navbar-menu ${showHamburger}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/books">
                Books
              </Link>
              <Link className="navbar-item" to="/websites">
                Websites
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
              {/* <span className="navbar-item">
                  <Link className="button is-primary" to="/support">
                    <span>Support</span>
                  </Link>
                </span> */}
            </div>
            {/* TODO: ignore missing href */}
            {/* <a role="button" className={`navbar-burger ${this.state.isActive && 'is-active'}`} aria-label="menu" aria-expanded="false" onClick={this.toggle}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
          </div>
        </div>
      </nav>
    )
  }
}
