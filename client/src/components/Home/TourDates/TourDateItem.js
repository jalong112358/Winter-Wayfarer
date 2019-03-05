import React from "react";

const TourDateItem = ({ tourDate }) => {
  const USAShow = "United States";
  const DateInfo = new Date(tourDate.datetime);
  const MonthNames = [
    "Jan",
    "Febr",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const TicketUrl = tourDate.url;
  const Venue = tourDate.venue.name;
  const Region =
    tourDate.venue.country === USAShow
      ? tourDate.venue.region
      : tourDate.venue.country;
  const City = tourDate.venue.city;
  const DayofWeek = Days[DateInfo.getDay()];
  const Month = MonthNames[DateInfo.getMonth()];
  const DateNumber = DateInfo.getDate();
  const OutOfStock =
    tourDate.offers.length > 0
      ? tourDate.offers[0].status === "sold out"
      : false;
  const SoldOutClass = OutOfStock
    ? "bitw-custom-sold-out bitw-custom-buy-tickets"
    : "bitw-custom-buy-tickets";
  const TicketText =
    tourDate.offers.length === 0
      ? "RSVP"
      : tourDate.offers[0].status === "sold out"
      ? "Sold Out"
      : "Buy Tickets";

  return (
    <div className="event">
      <div className="show-date">
        <span className="month">{Month}</span>
        <span className="date">{DateNumber}</span>
      </div>
      <div className="scale-wrapper">
        <div className="place">
          <span className="venue">{Venue}</span>

          <span className="location">
            {City}, {Region}
          </span>
        </div>

        <a href={TicketUrl}>{TicketText}</a>
      </div>
    </div>
  );
};

export default TourDateItem;
