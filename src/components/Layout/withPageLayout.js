import React from "react";

import Navigation from "../Navigation";
// import Breadcrumbs from "../Breadcrumbs";
import Hero from "../Hero";
import Footer from "../Footer";

// Temp
const Banner = () => (
  <div className="notification is-warning">
    <p>
      <em>Shhh… don’t tell anyone....</em> <strong>JW Research</strong> is still under construction. Stay tuned to view
      the Beta version of this website!
    </p>
  </div>
);

function withPageLayout(WrappedComponent, title, subtitle) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Banner />
          <Navigation />
          {title && <Hero title={title} subtitle={subtitle} />}
          {/* <Breadcrumbs /> */}
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
