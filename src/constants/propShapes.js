import PropTypes from "prop-types";

export const siteMetaDataShape = PropTypes.shape({
  "site-copyright-year": PropTypes.string.isRequired,
  "site-description": PropTypes.string.isRequired,
  "site-name": PropTypes.string.isRequired,
  "site-name-long": PropTypes.string.isRequired,
}).isRequired;

export const siteMenuShape = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })
).isRequired;
