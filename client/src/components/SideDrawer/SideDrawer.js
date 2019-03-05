import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link
            activeClass="active"
            className="link"
            onClick={props.drawerClickHandler}
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
            onClick={props.drawerClickHandler}
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
            onClick={props.drawerClickHandler}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            className="link"
            onClick={props.drawerClickHandler}
            to="tour-dates"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
          >
            Tour Dates
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            className="link"
            onClick={props.drawerClickHandler}
            to="merch"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            Merch
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            className="link"
            onClick={props.drawerClickHandler}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-75}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
