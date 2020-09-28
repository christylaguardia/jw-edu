import React from "react";

import withResourceLayout from "../components/Layout/withResourceLayout";
import { MovieCard } from "../components/Card/MovieCard";

const Movies = ({ pageContext }) => {
  if (!pageContext) return <p>Loading...</p>;

  const { data } = pageContext;

  if (!data) return <p>No movies :(</p>;

  return (
    <div className="columns is-multiline is-mobile">
      {data.map(({ node }) =>
        !node.Plot || node.Plot === "N/A" ? null : (
          <div key={node.id} className="column is-full-mobile is-half-tablet is-half-desktop">
            <MovieCard {...node} />
          </div>
        )
      )}
    </div>
  );
};

export default withResourceLayout(Movies);
