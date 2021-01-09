const path = require("path");

const query = `{
  allMongodbJwresearchGooglebooksapi(
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
  const books = result.data.allMongodbJwresearchGooglebooksapi.edges;
  const booksTotal = books.length;
  const booksPerPage = 12;
  const numPages = Math.ceil(booksTotal / booksPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const basePath = "/books";
    const slug = i === 0 ? basePath : `${basePath}/${i + 1}`;

    createPage({
      path: slug,
      component: path.resolve("./src/templates/view.js"),
      context: {
        basePath,
        slug,
        limit: booksPerPage,
        skip: i * booksPerPage,
        numPages,
        currentPage: i + 1,
        total: booksTotal,
        // THis is not needed?
        node: {
          slug,
        },
      },
    });

    console.log(`created page ${slug}`);
  });
}

module.exports = { query, createPage };
