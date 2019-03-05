import React from "react";

import "./DrawerToggle.css";

const DrawerToggle = props => {
  let drawerToggleClasses = "toggle-button-line";
  if (props.changeIcon) {
    drawerToggleClasses = "toggle-button-line change";
  } else {
    drawerToggleClasses = "toggle-button-line";
  }
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className={drawerToggleClasses} />
      <div className={drawerToggleClasses} />
      <div className={drawerToggleClasses} />
    </button>
  );
};

export default DrawerToggle;
