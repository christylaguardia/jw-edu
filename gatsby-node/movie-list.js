const path = require("path");

const query = `
{
  allMongodbOmdbapiMovies(sort: {fields: Year, order: DESC}, limit: 100) {
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
        override_poster_url
        Runtime
        Ratings {
          Source
          Value
        }
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
      node: {
        slug: "/movie",
      },
      data: result.data.allMongodbOmdbapiMovies.edges,
    },
  });
}

module.exports = { query, createPage };
