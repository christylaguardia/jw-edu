import React from "react"
import { Link } from "gatsby"

export const Books = ({ data }) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      {data &&
        data.allContentfulBook.edges.map(({ node }, index) => (
          <tr key={node.id}>
            <td>{index + 1}</td>
            <td>
              <Link to={`/books/${node.id}`}>{node.title}</Link>
            </td>
            <td>
              {node.authors &&
                node.authors.map(author => (
                  <Link key={author.id} to={`/authors/${author.id}`}>
                    {author.name}
                  </Link>
                ))}
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);
