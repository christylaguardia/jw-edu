import React from "react"
import PropTypes from "prop-types"

const Hero = ({ title, subtitle }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default Hero
