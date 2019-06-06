import React from "react";
import { StaticQuery, graphql } from "gatsby";

export const About = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="container">
        <div className="section">
          <div className="columns is-mobile is-centered">
            <div className="column is-half">
              <p className="notification">
                {data.contentfulText.text.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

const query = graphql`
  {
    contentfulText(name: {eq: "about"}) {
      text {
        text
      }
    }
  }
`;
