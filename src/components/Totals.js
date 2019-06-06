import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

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

const LevelItem = ({ heading, path, title }) => (
  <Link to={path}>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">{heading}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  </Link>
);

const LevelItems = ({ data }) => (
  <div className="container">
    <div className="section">
      <nav className="level">
        <LevelItem
          heading="Authors"
          path="/authors"
          title={data.allContentfulAuthor.pageInfo.itemCount}
        />
        <LevelItem
          heading="Books"
          path="/books"
          title={data.allContentfulBook.pageInfo.itemCount}
        />
        <LevelItem
          heading="Websites"
          path="/websites"
          title={data.allContentfulWebsite.pageInfo.itemCount}
        />
        <LevelItem
          heading="Topics"
          path="/topics"
          title={data.allContentfulTag.pageInfo.itemCount}
        />
      </nav>
    </div>
  </div>
);

export const Totals = () => (
  <StaticQuery
    query={query}
    render={data => (<LevelItems data={data} />)}
  />
);
