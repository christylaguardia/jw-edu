import React from "react"
import { Link } from "gatsby"

const Table = ({ data }) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>Resource Type</th>
        <th>Title</th>
        <th>Author</th>
        <th>Published</th>
      </tr>
    </thead>
    <tbody>
      {data &&
        data.allContentfulResource.edges.map(({ node }, index) => (
          <tr key={node.id}>
            <td>{index + 1}</td>
            <td>{node.type}</td>
            <td>
              <Link to={`/resource/${node.id}`}>{node.title}</Link>
            </td>
            <td>
              {node.authors && node.authors.map(({ name }) => name).join(', ')}
              {/* {node.authors &&
                node.authors.map(({ id, name }) => (
                  <Link key={id} to={`/authors/${id}`}>
                    {name}{" "}
                  </Link>
                ))} */}
            </td>
            <td>{node.yearPublished}</td>
          </tr>
        ))}
    </tbody>
  </table>
)

export default Table
