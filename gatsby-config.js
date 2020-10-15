/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-graphql-loader`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [],
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        // { family: "Josefin Sans", variants: ["300", "500", "700"] },
        // { family: "Lato", variants: ["300", "500", "700"] },
        { family: "Frank Ruhl Libre", variants: ["300", "500", "700"] },
        { family: "Libre Baskerville", variants: ["300", "500", "700"] },
      ],
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
      downloadLocal: true,
    },
  },
];

const dbPlugins = [
  process.env.DB_COLLECTION_GOOGLE_BOOKS_API,
  process.env.DB_COLLECTION_OMDB_API,
  process.env.DB_COLLECTION_OPEN_LIBRARY_BOOKS_API,
  process.env.DB_COLLECTION_TAGS,
  process.env.DB_COLLECTION_WEBSITES,
].map(collection => ({
  resolve: "gatsby-source-mongodb",
  options: {
    dbName: process.env.DB_NAME,
    collection: collection,
    connectionString: process.env.DB_CONNECTION_STRING,
    extraParams: {
      // replicaSet: 'Main-shard-0',
      ssl: true,
      authSource: "admin",
      retryWrites: true,
    },
  },
}));

module.exports = {
  siteMetadata: {
    title: "JW Research",
    // TODO: should add more info here?
  },
  plugins: plugins.concat(dbPlugins),
};
