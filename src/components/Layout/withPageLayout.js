import React from "react";

import { Navigation } from "./Navigation";
import { Menu } from ".//Menu";
import { Footer } from "./Footer";

function withPageLayout(WrappedComponent, path) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Navigation />
          <div className="container">
            <div className="section">
              <section className="main-content columns is-fullheight">
                <aside className="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
                  <Menu currentPath={path} />
                </aside>
                <main className="container column is-fullheight">
                  <WrappedComponent {...this.props} />
                </main>
              </section>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  };
}

export default withPageLayout;
