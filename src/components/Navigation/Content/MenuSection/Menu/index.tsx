import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Component
import Card from "./Card";

// Style
import "./index.css";
import useMenu from "./useMenu";

// Type
interface IMenu {
  id: number;
  title: string;
  categories: string[];
  categoryIndex: number;
  onProgramPress: (text: { id: number; title: string; color: string }) => void;
  setFocus: (text: string) => void;
  realFocusKey: string;
  programs: { id: number; title: string; color: string }[];
}

// Create focusable component
const FocusableCard = withFocusable()(Card);

export default function Menu({
  id,
  title,
  categories,
  categoryIndex,
  onProgramPress,
  setFocus,
  realFocusKey,
  programs,
}: IMenu) {
  const { scrollRef, onProgramFocused, onProgramArrowPress } = useMenu({
    categories,
    programs,
    setFocus,
  });

  return (
    <div className="single-menu-section">
      <div>{title}</div>
      <div className="menu" ref={scrollRef}>
        {programs.map((program, index) => (
          <FocusableCard
            focusKey={`card-${realFocusKey}-${program.id}-${id} `}
            {...program}
            onEnterPress={onProgramPress}
            key={program.id + id}
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
