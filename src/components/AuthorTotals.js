import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

// TODO: pass variable to graphql is not working

const query = authorId => (
  graphql`
    {
      allContentfulBook(filter: {authors: {elemMatch: {contentful_id: {eq: $authorId}}}}) {
        pageInfo {
          itemCount
        }
      }
    }
  `,
  { authorId: authorId }
);

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
          heading="Books"
          path="/books"
          title={data.allContentfulBook.pageInfo.itemCount}
        />
        <LevelItem
          heading="Websites"
          path="/websites"
          title="?"
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
