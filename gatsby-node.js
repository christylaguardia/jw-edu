const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Author`) {
    const id = createFilePath({ node, getNode, basePath: `authors` })
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBook {
        edges {
          node {
            id
            title
            description {
              id
              description
            }
            publishDate
            authors {
              id
              name
            }
            tags {
              id
              tag
            }
            isbns {
              id
              isbn
            }
            amazonHtml
          }
        }
      }
      allContentfulAuthor {
        edges {
          node {
            id
            name
            book {
              id
              title
              publishDate
            }
          }
        }
      }
      allContentfulTag {
        edges {
          node {
            id
            tag
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBook.edges.forEach(({ node }) => {
      createPage({
        path: `books/${node.id}`,
        component: path.resolve(`./src/pages/book.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          title: node.title,
          description: node.description,
          publishDate: node.publishDate,
          authors: node.authors,
          tags: node.tags,
          amazonHtml: node.amazonHtml,
        },
      })
    })
    result.data.allContentfulAuthor.edges.forEach(({ node }) => {
      createPage({
        path: `authors/${node.id}`,
        component: path.resolve(`./src/pages/author.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          name: node.name,
          book: node.book,
        },
      })
    })
    result.data.allContentfulTag.edges.forEach(({ node }) => {
      createPage({
        path: `tags/${node.id}`,
        component: path.resolve(`./src/pages/tag.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          tag: node.tag,
        },
      })
    })
  })
}
