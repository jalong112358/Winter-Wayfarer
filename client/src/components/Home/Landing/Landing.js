import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import bgImage from "../../../images/bg-image.jpg";
import bgImageSmall from "../../../images/landing-bg-small.jpg";
import facebookIcon from "../../../images/facebook.svg";
import twitterIcon from "../../../images/twitter.svg";
import instagramIcon from "../../../images/instagram.svg";
import youtubeIcon from "../../../images/youtube.svg";
import spotifyIcon from "../../../images/spotify.svg";
import itunesIcon from "../../../images/itunes.svg";

import "./Landing.css";

class Landing extends Component {
  state = {
    landingImage: ""
  };

  componentWillReceiveProps() {
    if (this.props.windowWidth < 800) {
      this.setState({
        landingImage: bgImageSmall
      });
    } else {
      this.setState({
        landingImage: bgImage
      });
    }
  }

  render() {
    const scrollPos = this.props.scrollPos;
    let landingClasses = "landing-bg";
    if (scrollPos > 50) {
      landingClasses = "landing-bg close";
    }
    console.log(this.state.landingImage);
    return (
      <div className="landing">
        <CSSTransitionGroup
          transitionName="landing"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div
            className="landing-bg"
            style={{
              backgroundImage: "url(" + this.state.landingImage + ")"
            }}
          >
            <div className="border" />
            <div className="social-links">
              <a href="https://www.facebook.com/winterwayfarer/">
                <img src={facebookIcon} />
              </a>
              <a href="https://twitter.com/winterwayfarer">
                <img src={twitterIcon} />
              </a>
              <a href="https://www.instagram.com/winterwayfarermusic/">
                <img src={instagramIcon} />
              </a>
              <a href="https://www.youtube.com/watch?v=Jow25j7k0qQ&list=PLpJIC0xUVIR7LVGY2_MlNLVDqnkObxEXy">
                <img src={youtubeIcon} />
              </a>
              <a href="https://open.spotify.com/artist/4LEK3FCSRNV0FEbL75DTS0?si=UDN9lpc5R_a81tYgokT8MQ">
                <img src={spotifyIcon} />
              </a>
              <a href="https://itunes.apple.com/us/album/keep-close/1298876488">
                <img src={itunesIcon} />
              </a>
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Landing;
