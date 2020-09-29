import React from "react";
import { Helmet } from "react-helmet";

import { Navigation } from "./Navigation";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

function withResourceLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { pageContext } = this.props;

      if (!pageContext || !pageContext?.siteMetaData || !pageContext?.menuItems) return null;
      const { menuItems, siteMetaData } = pageContext;

      const siteName = siteMetaData["site-name"];
      const siteNameLong = siteMetaData["site-name-long"];
      const siteDescription = siteMetaData["site-description"];
      const siteCopyrightYear = siteMetaData["site-copyright-year"];

      const path = pageContext?.slug || pageContext.node.slug;

      return (
        <div className="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{siteNameLong}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <Navigation siteName={siteName} currentPath={path} menuItems={menuItems} />
          <div className="container">
            <section className="section main-content columns is-fullheight">
              <aside className="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
                <Menu currentPath={path} menuItems={menuItems} />
              </aside>
              <main className="container column is-fullheight">
                <WrappedComponent {...this.props} />
              </main>
            </section>
          </div>
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

export default withResourceLayout;
