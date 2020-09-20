import React from "react";

export const WebsiteCard = ({ name }) => (
  <div className="card" style={{ height: "100%" }}>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-5">{name}</p>
        </div>
      </div>
    </div>
  </div>
);
