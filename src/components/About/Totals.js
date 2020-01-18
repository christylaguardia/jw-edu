import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const LevelItem = ({ heading, path, title }) => (
  <Link to={path}>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">{heading}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  </Link>
)

const LevelItems = ({ data }) => (
  <div className="container">
    <div className="section">
      <nav className="level">
        <LevelItem
          heading="Resources"
          path="/resources"
          title={data.allContentfulResource.pageInfo.itemCount}
        />
        <LevelItem
          heading="Authors"
          path="/authors"
          title={data.allContentfulAuthor.pageInfo.itemCount}
        />
        <LevelItem
          heading="Tags"
          path="/tags"
          title={data.allContentfulTag.pageInfo.itemCount}
        />
      </nav>
    </div>
  </div>
)

const Totals = () => (
  <StaticQuery query={query} render={data => <LevelItems data={data} />} />
)

const query = graphql`
  {
    allContentfulResource {
      pageInfo {
        itemCount
      }
    }
    allContentfulAuthor {
      pageInfo {
        itemCount
      }
    }
    allContentfulTag {
      pageInfo {
        itemCount
      }
    }
  }
`

export default Totals;
