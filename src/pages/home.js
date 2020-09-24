import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";
import "typeface-josefin-sans";
import "typeface-lato";

import "../scss/styles.scss";
import { RESOURCE_INFO }from '../constants'
import { Navigation } from "../components/Layout/Navigation";
import { Footer } from "../components/Layout/Footer";

const Home = ({ pathContext }) => {
  if (!pathContext) return null;

  const siteName = pathContext.siteMetaData.["site-name"];
  const siteNameLong = pathContext.siteMetaData.["site-name-long"];
  const siteDescription = pathContext.siteMetaData.["site-description"];

  return (
    <>
      <section
        className="hero is-fullheight"
        style={{
          background: "url('img/StockSnap_MXVB7KKVAB.jpg') no-repeat fixed center",
          backgroundSize: "cover",
        }}>
        <div className="hero-head">
        <Navigation siteName={siteName} />
          <div className="notification is-warning">
        <p>
          <em>Shhh… don’t tell anyone....</em> <strong>JW Research</strong> is still under construction. Stay tuned to view
          the Beta version of this website!
        </p>
      </div>
        </div>
        <div className="hero-body">
          <div className="container box has-background-white-ter	has-text-centered" style={{ padding: "3rem" }}>
            <h1 className="title is-size-1">{siteNameLong}</h1>
            <h2 className="subtitle">{siteDescription}</h2>

            {RESOURCE_INFO.map(({ path, title }) => (
              <Link key={path} className="button is-text" to={`/${path}`}>
                {title}
              </Link>
            ))}


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
};

export default Home;
