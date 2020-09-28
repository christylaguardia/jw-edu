import React from "react";
import { Helmet } from "react-helmet";

import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

function withPageLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { pageContext } = this.props;

      if (!pageContext || !pageContext?.siteMetaData || !pageContext?.menuItems) return null;

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
          <Navigation siteName={siteName} menuItems={menuItems} />
          <main className="container">
            <section className="section">
              <WrappedComponent {...this.props} />
            </section>
          </main>
          <Footer>
            <p>
              &copy; {siteCopyrightYear} {siteName}
            </p>
          </Footer>
        </div>
      );
    }
  };
}

export default withPageLayout;
