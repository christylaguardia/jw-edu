import React from "react"
import PropTypes from "prop-types"

const SideMenu = ({ title }) => (
  <>
    <article className="panel is-primary is-fixed-top">
      <p className="panel-heading">{title}</p>
      <p className="panel-tabs">
        <a className="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        marksheet
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        minireset.css
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        jgthms.github.io
      </a>
    </article>
  </>
)

SideMenu.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SideMenu
