import React from "react";
import Contact from "./Contact/Contact";
import "./Footer.css";

import facebookIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/twitter.svg";
import instagramIcon from "../../images/instagram.svg";
import youtubeIcon from "../../images/youtube.svg";
import spotifyIcon from "../../images/spotify.svg";
import itunesIcon from "../../images/itunes.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <Contact />
        <div className="footer-info">
          <div className="footer-section">
            <h1>Booking</h1>
            <p>winterwayfarermusic@gmail.com</p>
          </div>
          <div className="footer-section">
            <h1>Follow Us</h1>
            <div className="footer-icons">
              <a href="#">
                <img src={facebookIcon} />
              </a>
              <a href="#">
                <img src={twitterIcon} />
              </a>
              <a href="#">
                <img src={instagramIcon} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h1>Listen</h1>
            <div className="footer-icons">
              <a href="#">
                <img src={itunesIcon} />
              </a>
              <a href="#">
                <img src={spotifyIcon} />
              </a>
              <a href="#">
                <img src={youtubeIcon} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h1>Navigation</h1>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Music</a>
              </li>
              <li>
                <a href="">Merch</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Made with <i class="far fa-heart" /> Jake Long 2018
        </p>
      </div>
    </div>
  );
}
