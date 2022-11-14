import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Hero from "./Hero";
import MenuSection from "./MenuSection";

// Style
import "./index.css";
import useContent from "./useContent";

// Create focusable component
const FocusableMenuSection = withFocusable()(MenuSection);

export default function Content() {
  const { currentProgram, onProgramPress } = useContent();

  return (
    <div className="content">
      <Hero program={currentProgram} />
      <FocusableMenuSection
        focusKey={"menu-section"}
        onProgramPress={onProgramPress}
      />
    </div>
  );
}
