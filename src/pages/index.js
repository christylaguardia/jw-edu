import React from "react";
import "typeface-josefin-sans";
import "typeface-lato";

import "../scss/styles.scss";
import { SITE_NAME, SITE_DESC } from "../constants";

import Navigation from "../components/Navigation";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default () => (
  <>
    <section
      className="hero is-fullheight"
      style={{ background: "url('img/StockSnap_OYEIB7P371.jpg') no-repeat fixed center", backgroundSize: "cover" }}>
      <div className="hero-head">
        <Navigation />
      </div>
      <div className="hero-body">
        <div className="container box has-text-centered" style={{ padding: "6rem 4rem" }}>
          <h1 className="title is-size-1">{SITE_NAME}</h1>
          <h2 className="subtitle">{SITE_DESC}</h2>
          {/* <h2 className="subtitle">Search the for books and electronic resources.</h2> */}
          <Search />
        </div>
      </div>
    </section>
    <Footer>
      <p>
        <small>
          Photo by <a href="https://stocksnap.io/author/200">Matthew Henry</a> from{" "}
          <a href="https://stocksnap.io">StockSnap</a>
        </small>
      </p>
    </Footer>
  </>
);
