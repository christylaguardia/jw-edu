import React from "react";
import { SITE_NAME } from "../../constants";

/**
 * TODO: Find more content
 * Privacy Policy
 * Terms of Use
 * Phone number
 * Email address
 * Address
 * Social icons
 */

export const Footer = ({ children }) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        {children}
        {/* <p>
          <small>
            <strong>{SITE_NAME}</strong> made with ❤️ by{" "}
            <a href="http://christylaguardia.github.io/">Christy La Guardia</a>.
          </small>
        </p> */}
        <p>&copy; 2020 {SITE_NAME}</p>
      </div>
    </div>
  </footer>
);
