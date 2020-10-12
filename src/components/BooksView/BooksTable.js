import React from "react";

export const BooksTable = ({ books }) => (
  <table className="table">
    <thead>
      <th>Title</th>
      <th>Author</th>
      <th>Published</th>
    </thead>
    <tbody>
      {books.map(({ node }) => (
        <tr key={node.id}>
          <td>{node.volumeInfo?.title}</td>
          <td>{node.volumeInfo?.authors.join(", ")}</td>
          <td>{node.volumeInfo?.publishedDate ? node.volumeInfo?.publishedDate.substring(0, 4) : ""}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
