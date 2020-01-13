import React from "react"
import { Hero } from "../components/Hero"
import { Navigation } from "../components/Navigation"
import { Totals } from "../components/Totals"

export default () => (
  <>
    <Navigation />
    <Hero title="About" />
    <div className="container">
      <div className="section">
        <Totals />
        <div class="content">
          <p className="">
            The Jehovah's Witness Educational Resource is a research tool
            similar to a library catalog. Here you will find links to books,
            blogs, articles, websites and much more.
          </p>
          <p className="">
            This site does not include searching literature published by the
            Jehovah's Witnesses.
          </p>
        </div>
      </div>
    </div>
  </>
)
