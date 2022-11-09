import React from "react";
import { JsxElement } from "typescript";

// Style
import "./index.css";

// Type
interface INavItem {
  focused: boolean;
  logo: JsxElement;
}

export default function NavItem({ focused, logo }: INavItem) {
  return <div className={focused ? "active" : ""}>{logo}</div>;
}
