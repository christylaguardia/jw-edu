const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// What does this do?
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
      allContentfulResource {
        edges {
          node {
            id
            title
            type
            yearPublished
            authors {
              id
              name
            }
            description {
              id
              description
            }
            embedHtml {
              embedHtml
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
    result.data.allContentfulResource.edges.forEach(({ node }) => {
      createPage({
        path: `resource/${node.id}`,
        component: path.resolve(`./src/pages/resource.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          title: node.title,
          type: node.type,
          authors: node.authors,
          yearPublished: node.yearPublished,
          tags: node.tags,
          description: node.description,
          embedHtml: node.embedHtml,
          purchaseUrl: node.purchaseUrl,
        },
      })
    })
    // allContentfulAuthor {
    //   edges {
    //     node {
    //       id
    //       name
    //       book {
    //         id
    //         title
    //         publishDate
    //       }
    //     }
    //   }
    // }
    // result.data.allContentfulAuthor.edges.forEach(({ node }) => {
    //   createPage({
    //     path: `authors/${node.id}`,
    //     component: path.resolve(`./src/pages/author.js`),
    //     context: {
    //       // Data passed to context is available
    //       // in page queries as GraphQL variables.
    //       id: node.id,
    //       name: node.name,
    //       book: node.book,
    //     },
    //   })
    // })
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
  // TODO: catch?
}
