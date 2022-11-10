import React from "react";

// Style
import "./index.css";

// Type
interface ICard {
  color: string;
  onPress: () => void;
  focused: boolean;
  title: string;
}

export default function Card({ color, focused, title }: ICard) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={focused ? "card focused" : "card"}
    >
      {title}
    </div>
  );
}
