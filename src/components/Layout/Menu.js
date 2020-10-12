import React from "react";
import PropTypes from "prop-types";
import css from "classnames";
import Link from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteMenuShape } from "../../constants/propShapes";
import ICONS from "../../constants/icons";

export const Menu = ({ currentPath, siteMenu }) => (
  <div className="navbar-menu">
    <ul className="menu-list">
      {siteMenu.map(({ title, slug }) => {
        const icon = ICONS[slug];
        return (
          <li key={slug}>
            <Link
              to={`/${slug}`}
              className={css({ "is-active": currentPath.substring(1) === slug || currentPath === slug })}>
              {icon && (
                <span className="icon" style={{ marginRight: "8px" }}>
                  <FontAwesomeIcon icon={icon} size="1x" />
                </span>
              )}
              <span>{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

Menu.propTypes = {
  currentPath: PropTypes.string.isRequired,
  siteMenu: siteMenuShape,
};
