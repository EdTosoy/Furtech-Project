import React from "react";
import { useParams } from "react-router-dom";

import tables from "./data/tablesData.json";
import chairs from "./data/chairsData.json";
import lights from "./data/lightsData.json";

import "./MainShowcase.scss";

export default function MainShowcase() {
  const categoryData = {
    chairs,
    tables,
    lights,
  };
  const { category } = useParams();

  return (
    <div className="main-showcase">
      {categoryData[category].map(({ id, name, url, price }) => (
        <div
          className="card"
          key={id}
          style={{ backgroundImage: `url("${url}")` }}
        >
          <div className="text">
            <h1>{name}</h1>
            <p>${price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
