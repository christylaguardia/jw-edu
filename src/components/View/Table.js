import React from "react";

export const Table = ({ data }) => (
  <div className="box">
    <table className="table">
      <thead>
        {/* TODO: <th>Image</th> */}
        <tr>
          <th>Title</th>
          <th>Subtitle</th>
          <th>Description</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, title, subtitle, description, details, imgSrc }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{subtitle}</td>
            <td>{description}</td>
            <td>{details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
