import React, { useRef } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Component
import Card from "./Card";

// Style
import "./index.css";

// Create focusable component
const FocusableCard = withFocusable()(Card);

// Data

const programs = [
  {
    id: 0,
    title: "Program 1",
    color: "#fff",
  },
  {
    id: 1,
    title: "Program 2",
    color: "#dd4558",
  },
  {
    id: 2,
    title: "Program 3",
    color: "#7ddd6a",
  },
  {
    id: 3,
    title: "Program 4",
    color: "#dddd4d",
  },
  {
    id: 4,
    title: "Program 5",
    color: "#8299dd",
  },
  {
    id: 5,
    title: "Program 6",
    color: "#edab83",
  },
  {
    id: 6,
    title: "Program 7",
    color: "#60ed9e",
  },
  {
    id: 7,
    title: "Program 8",
    color: "#d15fb6",
  },
  {
    id: 8,
    title: "Program 9",
    color: "red",
  },
];

export default function Menu(props) {
  const scrollRef = useRef(null);

  // constructor(props) {
  //   super(props);

  //  scrollRef = React.createRef();
  //  onProgramFocused =onProgramFocused.bind(this);
  //  onProgramArrowPress =onProgramArrowPress.bind(this);
  // }

  function onProgramFocused({ x }) {
    if (x < 1250) {
      scrollRef.current.style.transform = `translateX(-${x}px)`;
    }
  }

  function onProgramArrowPress(direction, { categoryIndex, programIndex }) {
    if (
      direction === "right" &&
      programIndex === programs.length - 1 &&
      categoryIndex < props.categories.length - 1
    ) {
      props.setFocus(`CATEGORY-${categoryIndex + 1}`);

      return false;
    }

    return true;
  }

  return (
    <div className="single-menu-section">
      <div>{props.title}</div>
      <div className="menu" ref={scrollRef}>
        {programs.map((program, index) => (
          <FocusableCard
            focusKey={`card-${props.realFocusKey}-${program.id}`}
            {...program}
            onPress={() => props.onProgramPress(program)}
            onEnterPress={props.onProgramPress}
            key={program.id}
            onBecameFocused={onProgramFocused}
            onArrowPress={onProgramArrowPress}
            programIndex={index}
            categoryIndex={props.categoryIndex}
          />
        ))}
      </div>
    </div>
  );
}
