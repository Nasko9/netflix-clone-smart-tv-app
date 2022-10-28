import React from "react";
import {
  initNavigation,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";

// Components
import Sidenav from "./components/Sidenav";
import Content from "./components/Content";

// Initialization of navigation
initNavigation();

// Create focusable component
const FocusableSidenav = withFocusable({
  trackChildren: true,
})(Sidenav);

const FocusableContent = withFocusable()(Content);

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <FocusableSidenav focusKey={"sidenav"} />
        <FocusableContent focusKey={"content"} />
      </div>
    );
  }
}

export default App;
