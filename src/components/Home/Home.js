import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-plugin-transition-link/AniLink";

import PATHS from "../../constants/paths";

export const Home = ({ siteNameLong, siteDescription }) => (
  <section
    className="hero is-large"
    style={{
      backgroundImage: "url('img/StockSnap_CN63QSUO8C.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "grayscale(70%)",
    }}>
    <div className="hero-body" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="box is-radiusless	has-background-light" style={{ opacity: ".8", padding: "2rem" }}>
        <div className="container">
          <h1 className="title is-1">{siteNameLong}</h1>
          <h2 className="subtitle">{siteDescription}</h2>
          <div className="buttons">
            <Link className="button is-dark" to={PATHS.SEARCH}>
              Browse
            </Link>
            <Link className="button" to={PATHS.ABOUT}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Home.propTypes = {
  siteNameLong: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
};
