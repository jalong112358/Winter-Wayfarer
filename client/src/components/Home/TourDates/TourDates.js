import React, { Component } from "react";
import TourDateList from "./TourDateList";
import texture from "../../../images/texture.jpg";
import decor from "../../../images/decor.png";
import "./TourDates.css";

export default class TourDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourDates: []
    };

    fetch("https://rest.bandsintown.com/artists/Kip%20Moore/events?app_id=Test")
      .then(response => response.json())
      .then(tourDates => this.setState({ tourDates: tourDates }));
  }
  render() {
    return (
      <div
        className="tour-dates"
        style={{ backgroundImage: "url(" + texture + ")" }}
      >
        <div className="tour-dates-title">
          <div className="title-line" />
          <h1>Tour Dates</h1>
          <div className="title-line" />
        </div>
        {this.state.tourDates.length > 0 ? (
          <TourDateList tourDates={this.state.tourDates} />
        ) : (
          <div className="no-events-wrapper">
            <p className="no-events">We have no upcoming events.</p>
          </div>
        )}
        <img className="decor" src={decor} />
      </div>
    );
  }
}
