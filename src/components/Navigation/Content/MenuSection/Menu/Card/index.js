import React from "react";

// Style
import "./index.css";

export default function Card({ color, onPress, focused, title }) {
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
