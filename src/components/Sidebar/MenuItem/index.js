import React from "react";

// Style
import "./index.css";

export default function MenuItem({ focused, logo }) {
  return <div className={focused ? "active" : ""}>{logo}</div>;
}
