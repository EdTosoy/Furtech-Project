import React, { useState, useContext } from "react";
import { MenuContext } from "../../ContextApi/menuContext";

import cartSVG from "./media/cart.svg";
import personSVG from "./media/person.svg";
import "./User.scss";
export default function User() {
  const [dropMenu, setDropMenu] = useContext(MenuContext);

  const handleDrop = () => {
    setDropMenu((prevValue) => !prevValue);
  };
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
      <li className="drop-down-btn" onClick={handleDrop}>
        <a>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </a>
      </li>
    </ul>
  );
}
