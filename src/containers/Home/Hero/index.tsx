import React, { useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Interface
import "./index.css";
import Button from "./Button";

// Type
interface IHero {
  setFocus: (props: string) => void;
  program: {
    color: string;
    title: string;
  } | null;
}

const FocusableButton = withFocusable()(Button);

export default function Hero({ program, setFocus }: IHero) {
  useEffect(() => {
    setFocus("more-info-btn");
  }, []);

  const onPressButton = () => {
    console.log("MoreInfo button is clicked with enter");
  };

  return (
    <div
      className="hero"
      style={{ backgroundColor: program ? program.color : "#e8e4c9" }}
    >
      <h1>{program ? program.title : "No program"}</h1>
      <FocusableButton
        focusKey={`more-info-btn`}
        focusable={true}
        onEnterPress={onPressButton}
      />
    </div>
  );
}
