import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-plugin-transition-link/AniLink";

export const PageLink = ({ className, basePath, text, number }) => (
  <Link className={className} to={`/${basePath}${number === 0 ? "" : `/${number}`}`}>
    {text}
  </Link>
);

PageLink.propTypes = {
  className: PropTypes.string,
  basePath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default PageLink;
