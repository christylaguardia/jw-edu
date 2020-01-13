import React from "react"

export const Hero = ({ title, subtitle }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      </div>
    </div>
  </section>
)
