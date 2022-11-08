import React from "react";
import {
  initNavigation,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";

// Components
import Navigation from "./components/Navigation";

// Initialization of navigation
initNavigation();

// Create focusable component
const FocusableNavigation = withFocusable()(Navigation);

function App() {
  return (
    <div className="app">
      <FocusableNavigation focusable={false} />
    </div>
  );
}

export default App;
