import React from "react";

import "./Collection.scss";

export default function Collection() {
  return (
    <div id="collection" data-scroll>
      <div className="collection-content">
        <h1>Our Collection</h1>
        <figure>
          <a href="/shopping/tables" className="table">
            {" "}
          </a>
          <a href="/shopping/chairs" className="chair">
            {" "}
          </a>
          <a href="/shopping/lights" className="light">
            {" "}
          </a>
        </figure>
      </div>
    </div>
  );
}
