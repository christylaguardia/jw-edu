const path = require("path");

const SITE_META_DATA = require("./gatsby-node/site-meta-data");
const SITE_PAGE = require("./gatsby-node/site-page");
const BOOK_DETAILS = require("./gatsby-node/book-details");
const BOOK_LIST = require("./gatsby-node/book-list");
// const WEBSITE_LIST = require("./gatsby-node/website-list");
const WEBSITE_PAGE = require("./gatsby-node/website-page");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Fetch data
  const siteMetaDataResult = await graphql(SITE_META_DATA.query);
  const sitePageResult = await graphql(SITE_PAGE.query);
  const bookDetailsResult = await graphql(BOOK_DETAILS.query);
  const bookListResult = await graphql(BOOK_LIST.query);
  const websitePageResult = await graphql(WEBSITE_PAGE.query);

  // Fail build on error
  if (
    siteMetaDataResult.errors ||
    sitePageResult.errors ||
    bookDetailsResult.errors ||
    bookListResult.errors ||
    websitePageResult.errors
  ) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Include the site meta data on every page
  const siteMetaData = SITE_META_DATA.formatData({ result: siteMetaDataResult });
  console.log({ siteMetaData });
  const createPage = pageInfo =>
    actions.createPage({
      ...pageInfo,
      context: { ...pageInfo.context, siteMetaData },
    });

  // Create the static pages
  createPage({ path: `/`, component: path.resolve(`./src/pages/home.js`) });

  // Create the dynamic pages
  SITE_PAGE.createPage({ result: sitePageResult, createPage });
  BOOK_DETAILS.createPage({ result: bookDetailsResult, createPage });
  BOOK_LIST.createPage({ result: bookListResult, createPage });
  WEBSITE_PAGE.createPage({ result: websitePageResult, createPage });
};
