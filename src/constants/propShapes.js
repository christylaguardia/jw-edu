import PropTypes from "prop-types";

export const siteMetaDataShape = PropTypes.shape({
  "site-copyright-year": PropTypes.string,
  "site-description": PropTypes.string,
  "site-name": PropTypes.string,
  "site-name-long": PropTypes.string,
});

export const siteMenuShape = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  })
);
