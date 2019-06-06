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
    }
  `).then(result => {
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
  })
}