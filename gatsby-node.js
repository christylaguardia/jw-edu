const path = require("path");

const QUERIES = {
  BOOK_LIST: `
  {
    allBookDetails(
      limit: 1000,
      sort: {fields: volumeInfo___publishedDate, order: DESC},
      filter: {volumeInfo: {publishedDate: {ne: null}}}
    ) {
      edges {
        node {
          id
          volumeInfo {
            title
            authors
            publishedDate
            imageLinks {
              thumbnail
            }
          }
        }
      }
    }
  }
  `,
  BOOK_DETAILS: `
  {
    allBookDetails(limit: 1000) {
      edges {
        node {
          id
          selfLink
          volumeInfo {
            title
            subtitle
            authors
            description
            imageLinks {
              small
              thumbnail
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
        }
      }
    }
  }
  `,
  WEBSITE_LIST: `
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
  `,
  BLOG: `
  {
    allContentfulBlog(limit: 1000, filter: { hide: { ne: true } }) {
      edges {
        node {
          id
          slug
          title
          markdown {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
  `,
};

function createBookListPages({ result, createPage }) {
  const books = result.data.allBookDetails.edges;
  const booksTotal = books.length;
  const booksPerPage = 10;
  const numPages = Math.ceil(booksTotal / booksPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/books` : `/books/${i + 1}`,
      component: path.resolve(`./src/templates/book-list.js`),
      context: {
        limit: booksPerPage,
        skip: i * booksPerPage,
        numPages,
        currentPage: i + 1,
        total: booksTotal,
      },
    });
  });
}

function createBookDetailPages({ result, createPage }) {
  result.data.allBookDetails.edges.forEach(({ node }) => {
    createPage({
      path: `book/${node.id}`,
      component: path.resolve(`./src/pages/book.js`),
      context: {
        node: node,
      },
    });
  });
}

function createWebsitesPage({ result, createPage }) {
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

function createBlogPages({ result, createPage }) {
  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/pages/blog.js`),
      context: {
        node: node,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const bookDetailsResult = await graphql(QUERIES.BOOK_DETAILS);
  const bookListResult = await graphql(QUERIES.BOOK_LIST);
  const websiteListResult = await graphql(QUERIES.WEBSITE_LIST);
  const blogResult = await graphql(QUERIES.BLOG);

  if (bookListResult.errors || bookDetailsResult.errors || websiteListResult.errors || blogResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createBookListPages({ result: bookListResult, createPage });
  createBookDetailPages({ result: bookDetailsResult, createPage });
  createWebsitesPage({ result: websiteListResult, createPage });
  createBlogPages({ resultL: blogResult, createPage });
};
