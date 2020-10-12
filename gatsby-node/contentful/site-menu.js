const query = `
{
  allContentfulSiteMenu(
    limit: 100,
    sort: {order: ASC, fields: title},
    filter: {enabled: {eq: true}}
    ) {
      edges {
        node {
          title
          slug
          enabled
        }
      }
  }
}
`;

function formatData({ result }) {
  return result.data.allContentfulSiteMenu.edges.map(({ node: { slug, title } }) => ({ slug, title }));
}

module.exports = { query, formatData };
