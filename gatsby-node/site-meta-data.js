const query = `
{
  allContentfulSiteMetaData {
    edges {
      node {
        name
        value
      }
    }
  }
}
`;

function formatData({ result }) {
  return result.data.allContentfulSiteMetaData.edges.reduce((obj, node) => ({ ...obj, [node.name]: node.value }));
}

module.exports = { query, formatData };
