const path = require("path");

const query = `{
  allMongodbGooglebooksapiVolumes(
    limit: 1000
    sort: { fields: volumeInfo___publishedDate, order: DESC }
    filter: { volumeInfo: { publishedDate: { ne: null } } }
  ) {
    edges {
      node {
        id
        volumeInfo {
          title
          authors
          categories
          publishedDate
          imageLinks {
            thumbnail
          }
        }
      }
    }
  }
}`;

function createPage({ result, createPage }) {
  const books = result.data.allMongodbGooglebooksapiVolumes.edges;
  const booksTotal = books.length;
  const booksPerPage = 12;
  const numPages = Math.ceil(booksTotal / booksPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const slug = i === 0 ? `/book` : `/book/${i + 1}`;

    createPage({
      path: `/resources${slug}`,
      component: path.resolve(`./src/templates/book-list.js`),
      context: {
        limit: booksPerPage,
        skip: i * booksPerPage,
        numPages,
        currentPage: i + 1,
        total: booksTotal,
        node: {
          slug,
        },
      },
    });
  });
}

module.exports = { query, createPage };
