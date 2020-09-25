import React from "react";
import css from "classnames";
import Link from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RESOURCE_INFO } from "../../constants";

export const Menu = () => {
  const currentPath = window?.location?.pathname.substring(1);

  return (
    <div className="navbar-menu">
      <ul className="menu-list">
        {Object.values(RESOURCE_INFO).map(({ path, title, icon }) => (
          <li key={path}>
            <Link to={`/${path}`} className={css({ "is-active": currentPath === path })}>
              <span className="icon" style={{ marginRight: "8px" }}>
                <FontAwesomeIcon icon={icon} size="1x" />
              </span>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
