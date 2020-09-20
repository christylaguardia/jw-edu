/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `JW Research`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
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
      resolve: `gatsby-source-firebase`,
      options: {
        credential: require("./firebase-key.json"),
        databaseURL: "https://cult-education.firebaseio.com",
        types: [
          {
            type: "BookDetails",
            path: "book-details",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: `${process.env.FIREBASE_API_KEY}`,
          authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
          databaseURL: `${process.env.FIREBASE_DATABASE_URL}`,
          projectId: `${process.env.FIREBASE_PROJECT_ID}`,
          storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
          messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
          appId: `${process.env.FIREBASE_APP_ID}`,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: "Josefin Sans", variants: ["300", "500", "700"] },
          { family: "Lato", variants: ["300", "500", "700"] },
        ],
      },
    },
  ],
};
