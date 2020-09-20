import React from "react";
import PropTypes from "prop-types";

export const Hero = ({ title, subtitle }) => (
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">{title}</h1>
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
