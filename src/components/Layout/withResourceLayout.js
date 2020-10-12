import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { siteMetaDataShape, siteMenuShape } from "../../constants/propShapes";
import { Navigation } from "./Navigation";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

function withResourceLayout(WrappedComponent) {
  class ResourceLayout extends React.Component {
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

      const path = pageContext?.slug || pageContext.node.slug;

      return (
        <div className="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{siteNameLong}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <Navigation siteName={siteName} currentPath={path} siteMenu={siteMenu} />
          <main className="container">
            <section className="section main-content columns is-fullheight">
              <aside className="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
                <Menu currentPath={path} siteMenu={siteMenu} />
              </aside>
              <main className="container column is-fullheight">
                <WrappedComponent {...this.props} />
              </main>
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

  ResourceLayout.propTypes = {
    pageContext: PropTypes.shape({
      siteMetaData: siteMetaDataShape,
      siteMenu: siteMenuShape,
    }),
  };

  return ResourceLayout;
}

export default withResourceLayout;
