import React from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import "./Toolbar2.css";

const Toolbar2 = props => {
  let classes = "toolbar2";

  if (props.scrollPos > 200) {
    classes = "toolbar2 open";
  }

  return (
    <header className={classes}>
      <div className="toggle-bg">
        <DrawerToggle
          click={props.drawerClickHandler}
          changeIcon={props.show}
        />
      </div>
    </header>
  );
};

export default Toolbar2;
