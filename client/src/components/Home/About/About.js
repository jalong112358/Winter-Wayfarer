import React, { Component } from "react";
import aboutBg from "../../../images/about-bg.jpg";
import ReactDOM from "react-dom";

import "./About.css";

class About extends Component {
  state = {
    elementPos: null,
    posFromTop: 0
  };

  parallaxLoop = () => {
    setInterval(() => {
      let newScrollPos = this.props.scrollPos;
      var setElementPos = ReactDOM.findDOMNode(this).getBoundingClientRect()
        .top;

      this.setState({
        posFromTop: newScrollPos,
        elementPos: setElementPos
      });
    }, 25);
  };

  componentDidMount() {
    this.parallaxLoop();
  }

  render() {
    const elementPos = this.state.elementPos * -1;

    const newHeaderPos = 100 + elementPos * 0.15;
    const newBodyPos = -25 + elementPos * 0.25;

    return (
      <div
        className="about"
        style={{ backgroundImage: "url(" + aboutBg + ")" }}
      >
        <h1 style={{ top: newHeaderPos }}>ABOUT US</h1>
        <p style={{ bottom: newBodyPos }}>
          Winter Wayfarer is a solo project by Collin Hop. Through the story
          that drives this conceptual series of music, I hope to be able to
          share with you the images I see in my head. This story follows a
          fictional tale of a heavily burdened character and her travels.
          Starting from the 1880s, the story maneuvers its way through the
          coming decades. Please join me in the development of this project!
        </p>
      </div>
    );
  }
}

export default About;
