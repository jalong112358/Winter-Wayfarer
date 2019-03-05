import React from "react";

import shirt from "../../../images/shirt.png";
import cd from "../../../images/cd.png";
import texture from "../../../images/texture.jpg";

import "./Merch.css";

export default function Merch() {
  return (
    <div className="merch">
      <div className="merch-title">
        <div className="title-line" />
        <h1>Merch</h1>
        <div className="title-line" />
      </div>
      <div className="merch-items">
        <div className="item shirt">
          <img src={shirt} />
          <div className="item-details">
            <a href="https://winterwayfarer.bandcamp.com/merch/rose-tee">
              Rose Tee
            </a>
            <span>$15</span>
          </div>
        </div>

        <div className="item cd">
          <img src={cd} />
          <div className="item-details">
            <a href="https://winterwayfarer.bandcamp.com/album/keep-close">
              Keep Close - CD
            </a>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
