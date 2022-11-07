import React from "react";

// Style
import "./index.css";

export default function NavItem({ focused, logo }) {
  return <div className={focused ? "active" : ""}>{logo}</div>;
}
