import React from "react"
import { Navigation } from '../components/Navigation';;

export default () => (
  <div>
    <Navigation />
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title">
            Error!
          </p>
        </div>
      </div>
    </section>
  </div>
);
