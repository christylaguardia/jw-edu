const path = require("path");

const query = `
  {
    allContentfulWebsite(limit: 1000, filter: { hide: { ne: true } }) {
      edges {
        node {
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
  `;

function createPage({ result, createPage }) {
  const websites = result.data.allContentfulWebsite.edges;
  const websitesTotal = websites.length;
  const websitesPerPage = 10;
  const numPages = Math.ceil(websitesTotal / websitesPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/websites` : `/websites/${i + 1}`,
      component: path.resolve(`./src/templates/website-list.js`),
      context: {
        limit: websitesPerPage,
        skip: i * websitesPerPage,
        numPages,
        currentPage: i + 1,
        total: websitesTotal,
      },
    });
  });
}

module.exports = { query, createPage };
