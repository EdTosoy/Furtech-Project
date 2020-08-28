import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";
export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/shopping/chairs" activeClassName="selected">
          Shopping
        </NavLink>
      </li>
      <li>
        <a href="/#collection">Furtech Collection</a>
      </li>
      <li>
        <a href="/#partners">Our Partners</a>
      </li>
      <li>
        <NavLink exact to="/about" activeClassName="selected">
          About Us
        </NavLink>
      </li>
    </ul>
  );
}
