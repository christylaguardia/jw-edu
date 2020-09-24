const path = require("path");

const query = `
{
  allContentfulWebsitePage(limit: 100) {
      edges {
        node {
          id
          slug
          title
          websites {
            id
            name
            url
            contributors {
              id
              name
            }
            tags {
              id
              tag
            }
          }
        }
      }
    }
  }
`;

function createPage({ result, createPage }) {
  result.data.allContentfulWebsitePage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/pages/website-page.js`),
      context: {
        node: node,
      },
    });
  });
}

module.exports = { query, createPage };
