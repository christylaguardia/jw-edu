import React from "react"
import { Link } from "gatsby"

export const Authors = ({ data }) => {
  return data.map(author => (
    <Link key={author.id} to={`/authors/${author.id}`}>{author.name}</Link>
  ))
}
