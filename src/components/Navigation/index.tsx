import React, { useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Sidenav from "./Sidenav";
import Content from "./Content";

// Style
import "./index.css";

// Type
interface INavigation {
  navigateByDirection: (text: string) => void;
}

// Create focusable component
const FocusableSidenav = withFocusable({
  trackChildren: true,
})(Sidenav);
const FocusableContent = withFocusable()(Content);

export default function Navigation({ navigateByDirection }: INavigation) {
  const onWheel = (event: any) => {
    event.preventDefault();
    throttledWheelHandler(event);
  };

  const throttledWheelHandler = (event: any) => {
    console.log(event);
    event.preventDefault();
    const { deltaY, deltaX } = event;

    if (deltaY > 1) {
      navigateByDirection("down");
    } else if (deltaY < 0) {
      navigateByDirection("up");
    } else if (deltaX > 1) {
      navigateByDirection("right");
    } else if (deltaX < 1) {
      navigateByDirection("left");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: false });
    return window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="navigation">
      <FocusableSidenav focusKey={"sidenav"} />
      <FocusableContent focusKey={"content"} />
    </div>
  );
}
