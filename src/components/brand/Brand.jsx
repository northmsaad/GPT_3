import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding ">
      <div>
        <img src={google} alt="Google Image" />
      </div>
      <div>
        <img src={slack} alt="Slack Image" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian Image" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox Image" />
      </div>
      <div>
        <img src={shopify} alt="Shopify Image" />
      </div>
    </div>
  );
};

export default Brand;
