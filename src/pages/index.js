import React from "react";

import "typeface-josefin-sans";
import "typeface-lato";
import "../scss/styles.scss";

import Navigation from "../components/Navigation";
import Search from "../components/Search";
import Footer from "../components/Footer";

import { SITE_NAME, SITE_DESC } from "../constants";
// import { Helmet } from "react-helmet";

// Temp
const Banner = () => (
  <div className="notification is-warning">
    <p>
      <em>Shhh… don’t tell anyone....</em> <strong>JW Research</strong> is still under construction. Stay tuned to view
      the Beta version of this website!
    </p>
  </div>
);

export default () => (
  <>
    <section
      className="hero is-fullheight"
      style={{
        background: "url('img/StockSnap_MXVB7KKVAB.jpg') no-repeat fixed center",
        backgroundSize: "cover",
      }}>
      <div className="hero-head">
        <Navigation />
        <Banner />
      </div>
      <div className="hero-body">
        <div className="container box has-background-white-ter	has-text-centered" style={{ padding: "3rem" }}>
          <h1 className="title is-size-1">{SITE_NAME}</h1>
          <h2 className="subtitle">{SITE_DESC}</h2>
          {/* <h2 className="subtitle">Search the for books and electronic resources.</h2> */}
          <Search />
        </div>
      </div>
    </section>
    <Footer>
      <small>
        Photo by <a href="https://stocksnap.io/author/36296">Clay Banks</a> from{" "}
        <a href="https://stocksnap.io">StockSnap</a>
      </small>
    </Footer>
  </>
);
