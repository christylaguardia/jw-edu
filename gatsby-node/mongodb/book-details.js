const path = require("path");

const query = `
{
  allMongodbJwresearchGooglebooksapi(limit: 1000) {
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
  result.data.allMongodbJwresearchGooglebooksapi.edges.forEach(({ node }) => {
    const slug = `/books/${node.id}/details`;

    createPage({
      path: slug,
      component: path.resolve(`./src/pages/book.js`),
      context: {
        node: {
          ...node,
          slug: slug,
        },
      },
    });

    console.log(`created page ${slug}`);
  });
}

module.exports = { query, createPage };
