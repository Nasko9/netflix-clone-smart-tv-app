import React, { useState, useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Hero from "./Hero";
import MenuSection from "./MenuSection";

// Style
import "./index.css";

// Type
interface IContent {
  setFocus: () => {};
}

interface IProgramProps {
  foucsKey: string;
  id: number;
  title: string;
  color: string;
  programIndex: number;
  categoryIndex: number;
  parrentFocusKey: string;
  realFocusKey: string;
  focused: boolean;
  hasFocusedChild: boolean;
}

// Create focusable component
const FocusableMenuSection = withFocusable()(MenuSection);

// Data
const KEY_ENTER = "enter";
const B_KEY = 66;

export default function Content({ setFocus }: IContent) {
  const [currentProgram, setCurrentProgram] = useState<IProgramProps | null>(
    null
  );
  const [blockNavigationOut, setBlockNavigationOut] = useState(false);

  const onPressKey = (event: any) => {
    if (event.keyCode === B_KEY) {
      setBlockNavigationOut(true);
    }
  };

  const onProgramPress = (
    programProps: any,
    { pressedKeys }: { pressedKeys: any }
  ) => {
    if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
      return;
    }
    setCurrentProgram(programProps);
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
