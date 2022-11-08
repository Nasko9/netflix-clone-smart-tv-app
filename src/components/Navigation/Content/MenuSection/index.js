import React, { useRef } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Menu from "./Menu";

// Style
import "./index.css";

// Create focusable component
const FocusableMenu = withFocusable()(Menu);

// Data
const categories = [
  {
    id: 0,
    title: "Featured",
  },
];

export default function MenuSection({ onProgramPress }) {
  const scrollRef = useRef(null);

  return (
    <div ref={scrollRef} className="menu-section">
      {categories.map((category, index) => (
        <FocusableMenu
          focusKey={`menu-${category.id}`}
          key={category.id}
          {...category}
          onProgramPress={onProgramPress}
          categoryIndex={index}
          categories
        />
      ))}
    </div>
  );
}
