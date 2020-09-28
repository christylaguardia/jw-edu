import React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";

export const Home = ({ menuItems, siteNameLong, siteDescription }) => (
  <>
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
              <Link className="button is-dark" to="/resources/blog">
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
  </>
);
