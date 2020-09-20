import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-plugin-transition-link/AniLink";

export const PageLink = ({ className, basePath, text, number }) => (
  <Link className={className} to={`/${basePath}${number === 0 ? "" : `/${number}`}`}>
    {text.toString()}
  </Link>
);

PageLink.propTypes = {
  className: PropTypes.string,
  basePath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default PageLink;
