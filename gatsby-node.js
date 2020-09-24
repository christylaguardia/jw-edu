const SITE_META_DATA = require("./gatsby-node/site-meta-data");
const SITE_PAGE = require("./gatsby-node/site-page");
const BOOK_DETAILS = require("./gatsby-node/book-details");
const BOOK_LIST = require("./gatsby-node/book-list");
const WEBSITE_LIST = require("./gatsby-node/website-list");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Fetch data
  const siteMetaDataResult = await graphql(SITE_META_DATA.query);
  const sitePageResult = await graphql(SITE_PAGE.query);
  const bookDetailsResult = await graphql(BOOK_DETAILS.query);
  const bookListResult = await graphql(BOOK_LIST.query);
  const websiteListResult = await graphql(WEBSITE_LIST.query);

  // console.log('siteMetaDataResult', JSON.stringify(siteMetaDataResult));
  console.log("sitePageResult", JSON.stringify(sitePageResult));
  // console.log('bookDetailsResult', JSON.stringify(bookDetailsResult));
  // console.log('bookListResult', JSON.stringify(bookListResult));
  // console.log('websiteListResult', JSON.stringify(websiteListResult));

  // Fail build on error
  if (
    siteMetaDataResult.errors ||
    sitePageResult.errors ||
    bookDetailsResult.errors ||
    bookListResult.errors ||
    websiteListResult.errors
  ) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Include the site meta data on every page
  const siteMetaData = SITE_META_DATA.formatData({ result: siteMetaDataResult });
  const createPage = pageInfo => actions.createPage({ siteMetaData, ...pageInfo });

  // Create the pages
  SITE_PAGE.createPage({ result: sitePageResult, createPage });
  BOOK_DETAILS.createPage({ result: bookDetailsResult, createPage });
  BOOK_LIST.createPage({ result: bookListResult, createPage });
  WEBSITE_LIST.createPage({ result: websiteListResult, createPage });
};
