const path = require("path");

const SITE_META_DATA = require("./gatsby-node/site-meta-data");
const SITE_PAGE = require("./gatsby-node/site-page");
const BOOK_DETAILS = require("./gatsby-node/book-details");
const BOOK_LIST = require("./gatsby-node/book-list");
const RESOURCE_TYPE = require("./gatsby-node/resource-type");
const MOVIE_LIST = require("./gatsby-node/movie-list");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Fetch data
  const siteMetaDataResult = await graphql(SITE_META_DATA.query);
  const sitePageResult = await graphql(SITE_PAGE.query);
  const bookDetailsResult = await graphql(BOOK_DETAILS.query);
  const bookListResult = await graphql(BOOK_LIST.query);
  const resourceTypeResult = await graphql(RESOURCE_TYPE.query);
  const movieListResult = await graphql(MOVIE_LIST.query);

  // Fail build on error
  if (
    siteMetaDataResult.errors ||
    sitePageResult.errors ||
    bookDetailsResult.errors ||
    bookListResult.errors ||
    resourceTypeResult.errors ||
    movieListResult.errors
  ) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Include the site meta data on every page
  const siteMetaData = SITE_META_DATA.formatData({ result: siteMetaDataResult });
  const menuItems = resourceTypeResult.data.allContentfulResourceType.edges
    .map(({ node: { name, slug } }) => ({ name, slug }))
    .concat([{ name: "Movie", slug: "movie" }]) // TODO: should move to new content type
    .sort((a, b) => (a.slug > b.slug ? 1 : b.slug > a.slug ? -1 : 0));

  // Include site context on each page
  const createPage = pageInfo =>
    actions.createPage({
      ...pageInfo,
      context: {
        ...pageInfo.context,
        siteMetaData,
        menuItems,
      },
    });

  // Create the static pages
  createPage({ path: `/`, component: path.resolve(`./src/pages/home.js`) });

  // Create the dynamic content pages
  SITE_PAGE.createPage({ result: sitePageResult, createPage });
  BOOK_DETAILS.createPage({ result: bookDetailsResult, createPage });
  BOOK_LIST.createPage({ result: bookListResult, createPage });
  RESOURCE_TYPE.createPage({ result: resourceTypeResult, createPage });
  MOVIE_LIST.createPage({ result: movieListResult, createPage });
};
