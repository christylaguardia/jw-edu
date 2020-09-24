const path = require("path");

const query = `
{
  allContentfulPage(limit: 100) {
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
  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/pages/page.js`),
      context: {
        node: node,
      },
    });
  });
}

module.exports = { query, createPage };
