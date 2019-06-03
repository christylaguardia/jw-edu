import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allContentfulAuthor {
      pageInfo {
        itemCount
      }
    }
    allContentfulBook {
      pageInfo {
        itemCount
      }
    }
    allContentfulWebsite {
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
`;

const LevelItem = ({ heading, title }) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">{heading}</p>
      <p className="title">{title}</p>
    </div>
  </div>
);

const Totals = ({ data }) => (
  <div className="container">
    <div className="section">
      <nav className="level">
        <LevelItem
          heading="Authors"
          title={data.allContentfulAuthor.pageInfo.itemCount}
        />
        <LevelItem
          heading="Books"
          title={data.allContentfulBook.pageInfo.itemCount}
        />
        <LevelItem
          heading="Websites"
          title={data.allContentfulWebsite.pageInfo.itemCount}
        />
        <LevelItem
          heading="Tags"
          title={data.allContentfulTag.pageInfo.itemCount}
        />
      </nav>
    </div>
  </div>
);

export default () => (
  <StaticQuery
    query={query}
    render={data => (<Totals data={data} />)}
  />
);
