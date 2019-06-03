import React from "react";
import { Link } from "gatsby";

export default ({ data }) => {
  return data.map(author => (
    <Link to={`/authors/${author.id}`}>
      {author.name}
    </Link>
  ))
};
