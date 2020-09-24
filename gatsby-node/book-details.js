const path = require("path");

const query = `
{
  allMongodbGooglebooksapiVolumes(limit: 1000) {
    edges {
      node {
        id
        selfLink
        volumeInfo {
          title
          subtitle
          authors
          categories
          description
          imageLinks {
            smallThumbnail
            thumbnail
            small
            medium
            large
            extraLarge
          }
          industryIdentifiers {
            identifier
            type
          }
          publishedDate
          pageCount
          averageRating
          ratingsCount
        }
        accessInfo {
          webReaderLink
          embeddable
        }
        saleInfo {
          saleability
          buyLink
        }
      }
    }
  }
}
`;

function createPage({ result, createPage }) {
  result.data.allMongodbGooglebooksapiVolumes.edges.forEach(({ node }) => {
    createPage({
      path: `book/${node.id}`,
      component: path.resolve(`./src/pages/book.js`),
      context: {
        node: node,
      },
    });
  });
}

module.exports = { query, createPage };
