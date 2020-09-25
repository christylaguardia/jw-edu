import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";
import "typeface-josefin-sans";
import "typeface-lato";

import "../scss/styles.scss";
// import { RESOURCE_INFO } from "../constants";
import { Navigation } from "../components/Layout/Navigation";
import { Footer } from "../components/Layout/Footer";

const Home = ({ pathContext }) => {
  if (!pathContext) return null;

  const siteName = pathContext.siteMetaData["site-name"];
  const siteNameLong = pathContext.siteMetaData["site-name-long"];
  const siteDescription = pathContext.siteMetaData["site-description"];

  return (
    <>
      <div className="notification is-warning is-marginless">
        <p>
          <em>Shhh… don’t tell anyone....</em> <strong>JW Research</strong> is still under construction. Stay tuned to
          view the Beta version of this website!
        </p>
      </div>

      <Navigation />
      <section
        className="hero is-large"
        style={{
          backgroundImage: "url('img/StockSnap_CN63QSUO8C.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-body" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="box is-radiusless	has-background-light" style={{ opacity: ".8", padding: "2rem" }}>
            <div className="container">
              <h1 className="title is-1">{siteNameLong}</h1>
              <h2 className="subtitle">{siteDescription}</h2>
              <div className="buttons">
                <Link className="button is-dark" to="/books">
                  Browse
                </Link>
                <Link className="button" to="/about">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>

          {RESOURCE_INFO.map(({ path, title }) => (
            <Link key={path} className="button is-text" to={`/${path}`}>
              {title}
            </Link>
          ))}
        </div>
      </section> */}

      <Footer>
        <small>
          Photo by <a href="https://stocksnap.io/author/20658">Aaron Burden</a> from{" "}
          <a href="https://stocksnap.io">StockSnap</a>
        </small>
      </Footer>
    </>
  );
};

export default Home;
