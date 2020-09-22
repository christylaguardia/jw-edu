import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export const LevelItem = ({ heading, path, title }) => (
  <Link to={path}>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">{heading}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  </Link>
);

export const LevelItems = ({ data }) => (
  <div className="container">
    <div className="section">
      <nav className="level">
        <LevelItem heading="Books" path="/books" title={data.allMongodbGooglebooksapiVolumes.pageInfo.itemCount} />
        <LevelItem heading="Websites" path="/websites" title={data.allContentfulWebsite.pageInfo.itemCount} />
        <LevelItem heading="Tags" path="/tags" title={data.allContentfulTag.pageInfo.itemCount} />
      </nav>
    </div>
  </div>
);

export const Totals = () => <StaticQuery query={query} render={data => <LevelItems data={data} />} />;

export const query = graphql`
  {
    allMongodbGooglebooksapiVolumes {
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
