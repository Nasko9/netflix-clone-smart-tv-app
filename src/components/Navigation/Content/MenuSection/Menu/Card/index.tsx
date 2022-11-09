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

export default function Card({ color, onPress, focused, title }: ICard) {
  return (
    <div
      onClick={onPress}
      style={{ backgroundColor: color }}
      className={focused ? "card focused" : "card"}
    >
      {title}
    </div>
  );
}
