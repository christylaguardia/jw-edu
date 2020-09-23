import React from "react";

import "typeface-josefin-sans";
import "typeface-lato";
import "../scss/styles.scss";

import HomeHero from "../components/HomeHero";
import { Footer } from "../components/Layout/Footer";

export default () => (
  <>
    <HomeHero />
    <Footer>
      <small>
        Photo by <a href="https://stocksnap.io/author/36296">Clay Banks</a> from{" "}
        <a href="https://stocksnap.io">StockSnap</a>
      </small>
    </Footer>
  </>
);
