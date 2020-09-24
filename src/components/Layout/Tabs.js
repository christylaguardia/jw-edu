import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";
import css from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RESOURCE_INFO } from "../../constants";

export const Tabs = ({ currentPath }) => (
  <div className="tabs is-centered is-medium">
    <ul>
      {Object.values(RESOURCE_INFO).map(({ path, title, icon }) => (
        <li key={path} className={css({ "is-active": currentPath === path })}>
          <Link to={`/${path}`}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={icon} size="1x" />
            </span>
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
