import React from "react";

import cartSVG from "./media/cart.svg";
import personSVG from "./media/person.svg";
import "./User.scss";
export default function User() {
  return (
    <ul className="user">
      <li className="cart">
        <a href="/auth">
          <img src={cartSVG} alt="cart" />
        </a>
      </li>
      <li className="person">
        <a href="/auth">
          <img src={personSVG} alt="person" />
        </a>
      </li>
    </ul>
  );
}
