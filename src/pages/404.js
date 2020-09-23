import React from "react";

import withPageLayout from "../components/Layout/withPageLayout";

// TODO: better error message and page design
export const ErrorPage = () => (
  <section className="hero is-warning">
    <div className="hero-body">
      <div className="container">
        <p className="title">Error!</p>
      </div>
    </div>
  </section>
);

export default withPageLayout(ErrorPage);
