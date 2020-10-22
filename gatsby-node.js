const path = require("path");

const SITE_META_DATA = require("./gatsby-node/contentful/site-meta-data");
const SITE_MENU = require("./gatsby-node/contentful/site-menu");
const SITE_PAGE = require("./gatsby-node/contentful/site-page");

const BOOK_DETAILS = require("./gatsby-node/mongodb/book-details");
const BOOK_LIST = require("./gatsby-node/mongodb/book-list");
const MOVIES = require("./gatsby-node/mongodb/movies");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Fetch data
  const [
    siteMetaDataResult,
    siteMenuResult,
    sitePageResult,
    bookDetailsResult,
    bookListResult,
    moviesResult,
  ] = await Promise.all([
    graphql(SITE_META_DATA.query),
    graphql(SITE_MENU.query),
    graphql(SITE_PAGE.query),
    graphql(BOOK_DETAILS.query),
    graphql(BOOK_LIST.query),
    graphql(MOVIES.query),
  ]);

  // Fail build on error
  if (
    siteMetaDataResult.errors ||
    siteMenuResult.errors ||
    sitePageResult.errors ||
    bookDetailsResult.errors ||
    bookListResult.errors ||
    moviesResult.errors
  ) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Include site content on each page
  const siteMetaData = SITE_META_DATA.formatData({ result: siteMetaDataResult });
  const siteMenu = SITE_MENU.formatData({ result: siteMenuResult });
  const createPage = pageInfo =>
    actions.createPage({
      ...pageInfo,
      context: {
        ...pageInfo.context,
        siteMetaData,
        siteMenu,
      },
    });

  // Create the static content pages
  createPage({ path: `/`, component: path.resolve(`./src/templates/home.js`) });
  createPage({ path: `/search`, component: path.resolve(`./src/templates/search.js`) });

  // Create the dynamic content pages
  SITE_PAGE.createPage({ result: sitePageResult, createPage });
  BOOK_DETAILS.createPage({ result: bookDetailsResult, createPage });
  BOOK_LIST.createPage({ result: bookListResult, createPage });
  MOVIES.createPage({ result: moviesResult, createPage });
};
