import React from "react";

//Style
import "./index.css";

export default function Button({ focused }: { focused: boolean }) {
  return (
    <button className={focused ? "hero-button foucsed-button" : "hero-button"}>
      More Info
    </button>
  );
}
