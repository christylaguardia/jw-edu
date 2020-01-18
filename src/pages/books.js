import React from "react"
import { graphql, Link } from "gatsby"
import { Books } from "../components/Books"
import { Navigation } from "../components/Navigation"
import { SideMenu } from "../components/SideMenu"

export default ({ data }) => (
  <div>
    <Navigation />
    {/* <Hero title="Books" /> */}

    <div className="container">
      <div className="columns is-centered">
        <div className="column is-one-quarter">
          <SideMenu title="Find Books" />
        </div>
        <div className="column">
          <div className="content">
            {data && <Books data={data} />}
          </div>
          {/* TODO: */}
          {/* <nav
            className="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
              <li>
                <a className="pagination-link" aria-label="Goto page 1">
                  1
                </a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 45">
                  45
                </a>
              </li>
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 46"
                  aria-current="page"
                >
                  46
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 47">
                  47
                </a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 86">
                  86
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  {
    allContentfulBook {
      edges {
        node {
          id
          title
          authors {
            id
            name
          }
        }
      }
    }
  }
`
