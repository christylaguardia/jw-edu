const path = require("path");

const query = `
{
  allContentfulSitePage(limit: 100) {
      edges {
        node {
          id
          slug
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

function createPage({ result, createPage }) {
  result.data.allContentfulSitePage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/sitePage.js`),
      context: {
        node: node,
      },
    });
  });
}

module.exports = { query, createPage };
