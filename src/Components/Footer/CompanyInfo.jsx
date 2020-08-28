import React from "react";

import Logo from "../Header/Logo";
import "./CompanyInfo.scss";
export default function CompanyInfo() {
  return (
    <div className="company-info">
      <div className="company">
        <Logo />
        <h1>Furtect Corporation</h1>
      </div>
      <p>
        Furtech is an affiliate of Magento Office Furniture, Inc. Magento
        Concept and Craft Surface Inc
        <br />
        <br />
        know more about Furtech{" "}
        <a href="/about">
          <em>here</em>
        </a>
      </p>
    </div>
  );
}
