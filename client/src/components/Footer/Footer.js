import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from "./Contact/Contact";
import "./Footer.css";

import facebookIconDark from "../../images/facebook-dark.svg";
import twitterIconDark from "../../images/twitter-dark.svg";
import instagramIconDark from "../../images/instagram-dark.svg";
import youtubeIconDark from "../../images/youtube-dark.svg";
import spotifyIconDark from "../../images/spotify-dark.svg";
import itunesIconDark from "../../images/itunes-dark.svg";

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
              <a href="https://www.facebook.com/winterwayfarer/">
                <img
                  src={facebookIconDark}
                  onMouseOver={e => (e.currentTarget.src = facebookIcon)}
                  onMouseOut={e => (e.currentTarget.src = facebookIconDark)}
                />
              </a>
              <a href="https://twitter.com/winterwayfarer">
                <img
                  src={twitterIconDark}
                  onMouseOver={e => (e.currentTarget.src = twitterIcon)}
                  onMouseOut={e => (e.currentTarget.src = twitterIconDark)}
                />
              </a>
              <a href="https://www.instagram.com/winterwayfarermusic/">
                <img
                  src={instagramIconDark}
                  onMouseOver={e => (e.currentTarget.src = instagramIcon)}
                  onMouseOut={e => (e.currentTarget.src = instagramIconDark)}
                />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h1>Listen</h1>
            <div className="footer-icons">
              <a href="https://itunes.apple.com/us/album/keep-close/1298876488">
                <img
                  src={itunesIconDark}
                  onMouseOver={e => (e.currentTarget.src = itunesIcon)}
                  onMouseOut={e => (e.currentTarget.src = itunesIconDark)}
                />
              </a>
              <a href="https://open.spotify.com/artist/4LEK3FCSRNV0FEbL75DTS0?si=UDN9lpc5R_a81tYgokT8MQ">
                <img
                  src={spotifyIconDark}
                  onMouseOver={e => (e.currentTarget.src = spotifyIcon)}
                  onMouseOut={e => (e.currentTarget.src = spotifyIconDark)}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=Jow25j7k0qQ&list=PLpJIC0xUVIR7LVGY2_MlNLVDqnkObxEXy">
                <img
                  src={youtubeIconDark}
                  onMouseOver={e => (e.currentTarget.src = youtubeIcon)}
                  onMouseOut={e => (e.currentTarget.src = youtubeIconDark)}
                />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h1>Navigation</h1>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  className="link"
                  to="landing"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="link"
                  to="music"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="link"
                  to="merch"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={50}
                >
                  Merch
                </Link>
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
