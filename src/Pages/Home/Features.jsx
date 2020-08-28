import React from "react";

import home from "./media/home.svg";
import cube from "./media/cube.svg";
import card from "./media/card.svg";

import "./Features.scss";
export default function Features() {
  return (
    <div className="features">
      <div className="features-content" data-scroll>
        <div className="feature">
          <div className="icon">
            <img src={home} alt="icon" />
          </div>
          <div className="text">
            <h2>Free Shipping</h2>
            <p>all order over $99</p>
          </div>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={cube} alt="icon" />
          </div>
          <div className="text">
            <h2>90 Days Return</h2>
            <p>for goods issues</p>
          </div>
        </div>
        <div className="feature">
          <div className="icon">
            <img src={card} alt="icon" />
          </div>
          <div className="text">
            <h2>Secure Payment</h2>
            <p>100% safe & secure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
