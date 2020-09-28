import React from "react";
import css from "classnames";
import Link from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MENU_ICON } from "../../constants";

export const Menu = ({ currentPath, menuItems }) => (
  <div className="navbar-menu">
    <ul className="menu-list">
      {menuItems.map(({ name, slug }) => (
        <li key={slug}>
          <Link
            to={`/resources/${slug}`}
            className={css({ "is-active": currentPath.substring(1) === slug || currentPath === slug })}>
            <span className="icon" style={{ marginRight: "8px" }}>
              <FontAwesomeIcon icon={MENU_ICON[slug]} size="1x" />
            </span>
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
