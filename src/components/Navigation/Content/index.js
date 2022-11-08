import React, { useState, useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Hero from "./Hero";
import MenuSection from "./MenuSection";

// Style
import "./index.css";

// Create focusable component
const FocusableMenuSection = withFocusable()(MenuSection);

// Data
const KEY_ENTER = "enter";
const B_KEY = 66;

export default function Content({ setFocus }) {
  const [currentProgram, setCurrentPregram] = useState(null);
  const [blockNavigationOut, setBlockNavigationOut] = useState(false);

  const onPressKey = (event) => {
    if (event.keyCode === B_KEY) {
      setBlockNavigationOut(true);
    }
  };

  const onProgramPress = (programProps, { pressedKeys } = {}) => {
    if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
      return;
    }
    setCurrentPregram(programProps);
  };

  useEffect(() => {
    setFocus();
    window.addEventListener("keydown", onPressKey);
    return window.removeEventListener("keydown", onPressKey);
  }, []);

  return (
    <div className="content">
      <Hero program={currentProgram} />
      <FocusableMenuSection
        focusKey={"menu-section"}
        onProgramPress={onProgramPress}
        blockNavigationOut={blockNavigationOut}
      />
    </div>
  );
}
