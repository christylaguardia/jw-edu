const path = require("path");

const query = `
{
  allContentfulResourceType(limit: 100, sort: {order: ASC, fields: name}) {
    edges {
      node {
        id
        name
        slug
        website {
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
  result.data.allContentfulResourceType.edges
    .filter(resourceType => resourceType.node.slug !== "book")
    .forEach(({ node }) => {
      createPage({
        path: `/resources/${node.slug}`,
        component: path.resolve(`./src/templates/resource-type.js`),
        context: {
          node: node,
        },
      });
    });
}

module.exports = { query, createPage };
