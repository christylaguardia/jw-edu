import React, { useState } from "react";

import { Card } from "./Card";
import { List } from "./List";
import { Table } from "./Table";
import { VIEW, ViewSelector } from "./ViewSelector";
import Pagination from "../Pagination";

export const View = ({ title, data, start, end, total, currentPage, numPages, basePath }) => {
  // if (!data || !pageContext) return null;
  const [currentView, setCurrentView] = useState(VIEW.CARD);
  const isPaginated = currentPage !== undefined && numPages !== undefined;
  // const isPaginated = start !== undefined && end !== undefined && total !== undefined;

  const renderView = () => {
    switch (currentView) {
      case VIEW.CARD:
        return <Card data={data} />;
      case VIEW.LIST:
        return <List data={data} />;
      case VIEW.TABLE:
        return <Table data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <h1>{title}</h1>

      <div className="level">
        <div className="level-right">
          {/* {isPaginated && (
            <div className="level-item">
              <div className="content">
                <p>
                  Displaying {start} - {end} of {total}
                </p>
              </div>
            </div>
          )} */}
        </div>

        <div className="level-left" style={{ justifyContent: "flex-end" }}>
          <div className="level-item">
            <ViewSelector currentView={currentView} setCurrentView={setCurrentView} />
          </div>
        </div>
      </div>

      {renderView()}

      {isPaginated && <Pagination basePath={basePath} currentPage={currentPage} numPages={numPages} />}
    </div>
  );
};
