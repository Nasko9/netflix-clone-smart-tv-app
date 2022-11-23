import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Sidenav from "../SideMenu";
import Content from "./Content";

// Style
import "./index.css";

// Create focusable components
const FocusableSidenav = withFocusable({
  trackChildren: true,
})(Sidenav);
const FocusableContent = withFocusable()(Content);

export default function Navigation() {
  return (
    <div className="navigation">
      <FocusableSidenav focusKey={"sidenav"} />
      <FocusableContent focusKey={"content"} />
    </div>
  );
}
