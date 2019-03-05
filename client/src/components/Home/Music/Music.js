import React from "react";
import texture from "../../../images/texture.jpg";
import decor from "../../../images/decor.png";

import spotifyIcon from "../../../images/spotify.svg";
import itunesIcon from "../../../images/itunes.svg";

import albumCover from "../../../images/keepclosecover.jpg";

import "./Music.css";

export default function Music() {
  return (
    <div className="music" style={{ backgroundImage: "url(" + texture + ")" }}>
      <div className="title-area">
        <h1>Keep Close</h1>
        <div className="title-line" />
      </div>
      <div className="album">
        <img className="album-cover" src={albumCover} />
        <div className="description">
          <p>
            <span>
              Keep Close is the first full-length album by Winter Wayfarer and
              is the beginning to a concept album series. This chapter of the
              story focuses on the main character's early life, her longing to
              understand the world around her, and her parents' inherent
              struggles.
            </span>
          </p>
          <div className="album-links">
            <a href="#">
              <img src={itunesIcon} />
            </a>
            <a href="#">
              <img src={spotifyIcon} />
            </a>
            <a href="https://winterwayfarer.bandcamp.com/album/keep-close">
              Buy the CD
            </a>
          </div>
          <p>
            Released October 18, 2017
            <br />
            <br />
            Engineering and production by Collin Hop in Le Mars, IA.
            <br />
            Mixing and Mastering by Jim Hughes (Northary) in Sioux Falls, SD.
            <br />
            Album artwork by Abigail Ervin.
            <br />
            Additional artwork by Jim Hughes.
            <br />
            Additional artwork and album design by Collin Hop.
            <br />
            All songs written, arranged, and recorded by Collin Hop.
            <br />
            <br />
            Collin Hop: Vocals, Guitars, Acoustic, Piano, Synth, Accordion,
            Bass, Drums and Percussion
            <br />
            Jake Hansen, Ian Johnson, and Ryan Vande Vegte: Additional Vocals
            <br />
            Marty Balmer: Violin
            <br />
            Max Foster: Cello <br />
            <br />© all rights reserved
          </p>
        </div>
      </div>
      <img className="decor" src={decor} />
    </div>
  );
}
