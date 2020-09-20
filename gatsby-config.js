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
        credential: require("./firebase-key.json"), // TODO: move to env
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
          apiKey: `${process.env.FIREBASE_APIKEY}`,
          authDomain: `${process.env.FIREBASE_AUTHDOMAIN}`,
          databaseURL: `${process.env.FIREBASE_DATABASEURL}`,
          projectId: `${process.env.FIREBASE_PROJECTID}`,
          storageBucket: `${process.env.FIREBASE_STORAGEBUCKET}`,
          messagingSenderId: `${process.env.FIREBASE_MESSAGINGSENDERID}`,
          appId: `${process.env.FIREBASE_APPID}`,
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
