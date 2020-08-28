import React from "react";

import sofaking from "./media/sofaking.jpg";
import furnicom from "./media/Furnicom.jpg";
import curramore from "./media/Curramore.jpg";
import modern from "./media/modern.png";

import "./Partners.scss";
export default function Partners() {
  return (
    <div id="partners" data-scroll>
      <div className="partners-content">
        <div className="partners-logo">
          <img src={sofaking} alt="partners-logo" />
        </div>
        <div className="partners-logo">
          <img src={furnicom} alt="partners-logo" />
        </div>
        <div className="partners-logo">
          <img src={curramore} alt="partners-logo" />
        </div>
        <div className="partners-logo">
          <img src={modern} alt="partners-logo" />
        </div>
      </div>
    </div>
  );
}
