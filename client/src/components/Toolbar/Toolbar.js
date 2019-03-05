import React from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import "./Toolbar.css";
import logo from "../../images/logo.png";

const Toolbar = props => {
  return (
    <header className="toolbar">
      <div className="border-top" />
      <nav className="toolbar_nav">
        <img src={logo} />

        <div style={{ marginTop: "25px" }}>
          <DrawerToggle
            click={props.drawerClickHandler}
            changeIcon={props.show}
          />
        </div>
      </nav>
      <div className="border-top" />
    </header>
  );
};

export default Toolbar;
