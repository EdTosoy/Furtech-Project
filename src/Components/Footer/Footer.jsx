import React from "react";

import "./Footer.scss";
import CompanyInfo from "./CompanyInfo";
import GetInTouch from "./GetInTouch";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <CompanyInfo />
        <GetInTouch />
      </div>
    </footer>
  );
}
