import React from "react";
import withPageLayout from "../hocs/withPageLayout";

import Totals from "../components/Totals";

const About = () => (
  <div className="content">
    <p className="">
      The Jehovah's Witness Educational Resource is a research tool similar to a library catalog. Here you will find
      links to books, blogs, articles, websites and much more.
    </p>
    <p className="">This site does not include searching literature published by the Jehovah's Witnesses.</p>

    <Totals />
  </div>
);

export default withPageLayout(About, "About");
