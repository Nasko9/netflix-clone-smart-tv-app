import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Hero from "./Hero";
import MenuSection from "./MenuSection";

//Hook
import useHomePage from "./useHomePage";

// Create focusable component
const FocusableMenuSection = withFocusable()(MenuSection);
const FocusableHero = withFocusable()(Hero);

export default function Home() {
  const { currentProgram, onProgramPress } = useHomePage();

  return (
    <div>
      <FocusableHero program={currentProgram} />
      <FocusableMenuSection
        focusKey={"menu-section"}
        onProgramPress={onProgramPress}
      />
    </div>
  );
}
