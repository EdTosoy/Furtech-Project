import React from "react";

import { NavLink } from "react-router-dom";

import "./CategoryNav.scss";
export default function CategoryNav() {
  return (
    <div className="category-nav">
      <h2>Furtech's Best</h2>
      <ul>
        <li>
          <NavLink exact to="/shopping/chairs" activeClassName="selected">
            Chairs
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/shopping/tables" activeClassName="selected">
            Tables
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/shopping/lights" activeClassName="selected">
            Lights
          </NavLink>
        </li>
        <li>
          <a href="https://mail.google.com/mail/u/0/" target="blank">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  );
}
