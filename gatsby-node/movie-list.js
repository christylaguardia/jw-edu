const path = require("path");

const query = `
{
  allMongodbJwresearchOmdbapi(sort: {fields: Year, order: DESC}, limit: 100) {
    edges {
      node {
        id
        imdbID
        Title
        Year
        Genre
        Rated
        Director
        Actors
        Country
        Language
        Plot
        Poster
        Runtime
        Ratings {
          Source
          Value
        }
        override_poster_url
        watch_url_prime_video
        watch_url_youtube
      }
    }
  }
}

`;

function createPage({ result, createPage }) {
  createPage({
    path: `/resources/movie`,
    component: path.resolve(`./src/templates/movie-list.js`),
    context: {
      slug: "/movie",
      data: result.data.allMongodbJwresearchOmdbapi.edges,
      total: result.data.allMongodbJwresearchOmdbapi.edges.length,
    },
  });
}

module.exports = { query, createPage };
