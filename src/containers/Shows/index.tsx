import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import CardMenu from "../../components/CardMenu";

// Create focusable component
const FocusableCardMenu = withFocusable()(CardMenu);

export default function Shows() {
  return <div>Shows</div>;
}
