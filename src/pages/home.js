import React from "react";
import { Helmet } from "react-helmet";

import "typeface-josefin-sans";
import "typeface-lato";
import "../scss/styles.scss";

import { Navigation } from "../components/Layout/Navigation";
import { Footer } from "../components/Layout/Footer";

const Home = ({ pageContext }) => {
  if (!pageContext || !pageContext.siteMetaData) return null;

  const { menuItems, siteMetaData } = pageContext;

  const siteName = siteMetaData["site-name"];
  const siteNameLong = siteMetaData["site-name-long"];
  const siteDescription = siteMetaData["site-description"];
  const siteCopyrightYear = siteMetaData["site-copyright-year"];

  return (
    <div className="app">
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

      <Navigation siteName={siteName} menuItems={menuItems} />
      <Home menuItems={menuItems} siteNameLong={siteNameLong} siteDescription={siteDescription} />

      <Footer>
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

export default Home;

// const Home = ({ pageContext }) => {
//   if (!pageContext || !pageContext.siteMetaData) return null;

//   const { menuItems, siteMetaData } = pageContext;

//   const siteName = siteMetaData["site-name"];
//   const siteNameLong = siteMetaData["site-name-long"];
//   const siteDescription = siteMetaData["site-description"];
//   const siteCopyrightYear = siteMetaData["site-copyright-year"];

//   return (
//     <div className="app">
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{siteNameLong}</title>
//         <meta name="description" content={siteDescription} />
//       </Helmet>

//       <div className="notification is-warning is-marginless">
//         <p>
//           <em>Shhh… don’t tell anyone....</em> <strong>JW Research</strong> is still under construction. Stay tuned to
//           view the Beta version of this website!
//         </p>
//       </div>

//       <Navigation siteName={siteName} menuItems={menuItems} />
//       <section
//         className="hero is-large"
//         style={{
//           backgroundImage: "url('img/StockSnap_CN63QSUO8C.jpg')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}>
//         <div className="hero-body" style={{ paddingLeft: 0, paddingRight: 0 }}>
//           <div className="box is-radiusless	has-background-light" style={{ opacity: ".8", padding: "2rem" }}>
//             <div className="container">
//               <h1 className="title is-1">{siteNameLong}</h1>
//               <h2 className="subtitle">{siteDescription}</h2>
//               <div className="buttons">
//                 <Link className="button is-dark" to="/resources/blog">
//                   Browse
//                 </Link>
//                 <Link className="button" to="/about">
//                   Learn more
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer>
//         <small>
//           Photo by <a href="https://stocksnap.io/author/20658">Aaron Burden</a> from{" "}
//           <a href="https://stocksnap.io">StockSnap</a>
//         </small>
//         <p>
//           &copy; {siteCopyrightYear} {siteName}
//         </p>
//       </Footer>
//     </div>
//   );
// };

// export default Home;
