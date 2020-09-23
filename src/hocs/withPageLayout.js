import React from "react";

import Navigation from "../Navigation";
import Footer from "../Footer";

function withPageLayout(WrappedComponent, title, subtitle) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Navigation />
          <div className="container">
            <div className="section">
              <WrappedComponent {...this.props} />
            </div>
          </div>
          <Footer />
        </>
      );
    }
  };
}

export default withPageLayout;
