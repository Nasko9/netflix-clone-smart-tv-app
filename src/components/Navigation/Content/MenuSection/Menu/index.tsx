import React, { ReactChild, useRef } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Component
import Card from "./Card";

// Style
import "./index.css";
import useMenu from "./useMenu";

// Type
interface IMenu {
  title: string;
  categories: string[];
  categoryIndex: number;
  onProgramPress: (text: { id: number; title: string; color: string }) => void;
  setFocus: (text: string) => void;
  realFocusKey: string;
}

// Create focusable component
const FocusableCard = withFocusable()(Card);

export default function Menu({
  title,
  categories,
  categoryIndex,
  onProgramPress,
  setFocus,
  realFocusKey,
}: IMenu) {
  const {
    programs,
    scrollRef,
    onProgramFocused,
    onProgramArrowPress,
  } = useMenu({ categories, setFocus });

  return (
    <div className="single-menu-section">
      <div>{title}</div>
      <div className="menu" ref={scrollRef}>
        {programs.map((program, index) => (
          <FocusableCard
            focusKey={`card-${realFocusKey}-${program.id}`}
            {...program}
            onEnterPress={onProgramPress}
            key={program.id}
            onBecameFocused={onProgramFocused}
            onArrowPress={onProgramArrowPress}
            programIndex={index}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </div>
  );
}
