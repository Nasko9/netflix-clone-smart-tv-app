import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Interface
import "./index.css";
import Button from "./Button";

// Type
interface IHero {
  program: {
    color: string;
    title: string;
  } | null;
}

const FocusableButton = withFocusable()(Button);

export default function Hero({ program }: IHero) {
  const onPressButton = () => {
    console.log("Enter is pressed on button");
  };
  return (
    <div
      className="hero"
      style={{ backgroundColor: program ? program.color : "#B9090B" }}
    >
      <h1>{program ? program.title : "No program"}</h1>
      <FocusableButton focusable={true} onEnterPress={onPressButton} />
    </div>
  );
}
