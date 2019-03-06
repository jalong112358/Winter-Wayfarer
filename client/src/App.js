import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import Toolbar2 from "./components/Toolbar/Toolbar2";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Landing from "./components/Home/Landing/Landing";
import Music from "./components/Home/Music/Music";
import About from "./components/Home/About/About";
import TourDates from "./components/Home/TourDates/TourDates";
import Merch from "./components/Home/Merch/Merch";

import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    scrollPos: 0,
    loading: true,
    windowWidth: 0
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  getScrollPos = () => {
    setInterval(() => {
      this.setState({
        scrollPos: window.pageYOffset
      });
    }, 25);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.getScrollPos();
  }

  render() {
    const { loading } = this.state;
    console.log(this.state.windowWidth);
    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }
    return (
      <div className="App">
        <Toolbar
          drawerClickHandler={this.drawerToggleHandler}
          show={this.state.sideDrawerOpen}
        />
        <Toolbar2
          drawerClickHandler={this.drawerToggleHandler}
          show={this.state.sideDrawerOpen}
          scrollPos={this.state.scrollPos}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          drawerClickHandler={this.drawerToggleHandler}
        />
        <Backdrop
          click={this.backdropClickHandler}
          show={this.state.sideDrawerOpen}
        />
        <main>
          <Landing
            scrollPos={this.state.scrollPos}
            windowWidth={this.state.windowWidth}
          />
          <Music />
          <About
            scrollPos={this.state.scrollPos}
            windowWidth={this.state.windowWidth}
          />
          <TourDates />
          <Merch />
          <Footer />
        </main>
      </div>
    );
  }
}
function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 2500));
}

export default App;
