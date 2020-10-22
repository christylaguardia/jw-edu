import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "typeface-josefin-sans";
import "typeface-lato";
import "../scss/styles.scss";

import { siteMetaDataShape, siteMenuShape } from "../constants/propShapes";
import Home from "../components/Home";
import { Navigation } from "../components/Layout/Navigation";
import { Footer } from "../components/Layout/Footer";

const HomePage = ({ pageContext }) => {
  if (!pageContext || !pageContext?.siteMetaData || !pageContext?.siteMenu) return null;

  const {
    siteMenu,
    siteMetaData: {
      "site-name": siteName,
      "site-name-long": siteNameLong,
      "site-description": siteDescription,
      "site-copyright-year": siteCopyrightYear,
    },
  } = pageContext;

  return (
    <div className="app has-navbar-fixed-top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteNameLong}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div className="notification is-warning is-marginless">
        <p>
          <em>Shhh… don’t tell anyone....</em> <strong>JW Research</strong> is still under construction. Stay tuned to
          view the Beta version of this website!
        </p>
      </div>

      <Navigation siteName={siteName} siteMenu={siteMenu} />
      <Home siteNameLong={siteNameLong} siteDescription={siteDescription} />

      <Footer siteMenu={siteMenu}>
        <small>
          Photo by <a href="https://stocksnap.io/author/20658">Aaron Burden</a> from{" "}
          <a href="https://stocksnap.io">StockSnap</a>
        </small>
        <p>
          &copy; {siteCopyrightYear} {siteName}
        </p>
      </Footer>
    </div>
  );
};

Home.propTypes = {
  pageContext: PropTypes.shape({
    siteMetaData: siteMetaDataShape,
    siteMenu: siteMenuShape,
  }),
};

export default HomePage;
