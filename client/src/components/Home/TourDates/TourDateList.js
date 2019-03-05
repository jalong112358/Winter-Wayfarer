import React from "react";
import TourDateItem from "./TourDateItem";

const TourDateList = props => {
  const tourDateItems = props.tourDates.map(tourDate => {
    return <TourDateItem tourDate={tourDate} key={tourDate.id} />;
  });

  return (
    <div className="events-wrapper">
      <div className="events">{tourDateItems}</div>
    </div>
  );
};

export default TourDateList;
