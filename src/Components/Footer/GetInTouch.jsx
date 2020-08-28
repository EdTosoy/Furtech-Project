import React from "react";

import "./GetInTouch.scss";
export default function GetInTouch() {
  return (
    <div className="get-in-touch">
      <div>
        <h1> Subcribe to our Newsletter</h1>
        <p>for exclusive discount and updates.</p>
        <form>
          <input type="email" required={true} />
          <button type="submit">
            <ion-icon name="paper-plane-sharp"></ion-icon>
          </button>
        </form>
      </div>
      <div className="get-in-touch-info">
        <div className="social">
          <h2>Follow Us</h2>
          <li>
            <a
              href="https://www.pinterest.ph/furtechofficefurnitures/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/furtech.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/furtech_india"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </div>
        <div className="contacts">
          <h2>Contact Us</h2>
          <li>+694 3385 4444</li>
          <li>info@fortech.com</li>
          <li>Vanellia Road, San Diego, Brazil.</li>
        </div>
      </div>
    </div>
  );
}
