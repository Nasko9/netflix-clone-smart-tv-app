import React from "react";
import {
  initNavigation,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Routes from "./containers/Routes";
import SideMenu from "./components/SideMenu";

// Initialization of navigation
initNavigation();

// Create focusable component
const FocusableSideMenu = withFocusable()(SideMenu);

function App() {
  return (
    <div className="app">
      <Router>
        <FocusableSideMenu />
        <div className="content">
          <Routes />
        </div>
        {/* <FocusableNavigation focusable={false} /> */}
      </Router>
    </div>
  );
}

export default App;
