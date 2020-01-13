import React from "react"
// import { Link } from "gatsby"
import { Navigation } from "../components/Navigation"
import { Tags } from "../components/Tags"

export const Home = () => (
  <>
    <section className="hero is-large">
      <div className="hero-head">
        <Navigation />
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Learn more about Jehovah's Witnesses</h1>
          <h2 className="subtitle">
            Search the catalog of print and electronic resources.
          </h2>
          {/* <Search /> */}
        </div>
        <div className="section">
          <Tags />
        </div>
      </div>

      {/* <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Books</a>
              </li>
              <li>
                <a>Websites</a>
              </li>
              <li>
                <a>Authors</a>
              </li>
              <li>
                <a>Medical</a>
              </li>
              <li>
                <a>Psychology</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </section>
  </>
)
