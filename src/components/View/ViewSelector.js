import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faThLarge, faTable } from "@fortawesome/free-solid-svg-icons";
import css from "classnames";

export const VIEW = Object.freeze({
  CARD: "card",
  LIST: "list",
  TABLE: "table",
});

export const ViewSelector = ({ currentView, setCurrentView }) => (
  <div className="field has-addons">
    <p className="control">
      <button
        className={css("button", { "is-dark": currentView === VIEW.CARD })}
        onClick={() => setCurrentView(VIEW.CARD)}>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faThLarge} size="1x" />
        </span>
        <span>Card</span>
      </button>
    </p>
    <p className="control">
      <button
        className={css("button", { "is-dark": currentView === VIEW.LIST })}
        onClick={() => setCurrentView(VIEW.LIST)}>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faList} size="1x" />
        </span>
        <span>List</span>
      </button>
    </p>
    <p className="control">
      <button
        className={css("button", { "is-dark": currentView === VIEW.TABLE })}
        onClick={() => setCurrentView(VIEW.TABLE)}>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faTable} size="1x" />
        </span>
        <span>Table</span>
      </button>
    </p>
  </div>
);
