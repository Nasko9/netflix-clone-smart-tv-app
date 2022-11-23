import React from "react";
import { JsxElement } from "typescript";

// Style
import "./index.css";

// Type
interface ISideMenuItem {
  focused: boolean;
  logo: JsxElement;
}

export default function SideMenuItem({ focused, logo }: ISideMenuItem) {
  return <div className={focused ? "active" : ""}>{logo}</div>;
}
