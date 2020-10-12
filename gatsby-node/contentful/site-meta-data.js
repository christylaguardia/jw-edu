const query = `
{
  allContentfulSiteMetaData {
    nodes {
      name
      value
    }
  }
}
`;

function formatData({ result }) {
  return result.data.allContentfulSiteMetaData.nodes.reduce((obj, node) => ({ ...obj, [node.name]: node.value }), {});
}

module.exports = { query, formatData };
