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
  const slug = "/movies";

  createPage({
    path: slug,
    component: path.resolve(`./src/pages/movies.js`),
    context: {
      slug: slug,
      data: result.data.allMongodbJwresearchOmdbapi.edges,
      total: result.data.allMongodbJwresearchOmdbapi.edges.length,
    },
  });

  console.log(`created page ${slug}`);
}

module.exports = { query, createPage };
