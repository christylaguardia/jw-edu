import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { siteMetaDataShape, siteMenuShape } from "../../constants/propShapes";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

function withPageLayout(WrappedComponent) {
  class PageLayout extends React.Component {
    render() {
      const { pageContext } = this.props;

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
        <div className="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{siteNameLong}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <Navigation siteName={siteName} siteMenu={siteMenu} />
          <main className="container">
            <section className="section">
              <WrappedComponent {...this.props} />
            </section>
          </main>
          <Footer siteMenu={siteMenu}>
            <p>
              &copy; {siteCopyrightYear} {siteName}
            </p>
          </Footer>
        </div>
      );
    }
  }

  PageLayout.propTypes = {
    pageContext: PropTypes.shape({
      siteMetaData: siteMetaDataShape,
      siteMenu: siteMenuShape,
    }),
  };

  return PageLayout;
}

export default withPageLayout;
