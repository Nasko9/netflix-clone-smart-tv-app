import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Menu from "./Menu";

// Style
import "./index.css";

// Type
interface IMenuSection {
  onProgramPress: () => void;
}

// Create focusable component
const FocusableMenu = withFocusable()(Menu);

// Data
const categories = [
  { id: 0, title: "Featured" },
  { id: 1, title: "Tv Shows" },
  { id: 2, title: "Favorite" },
];

export default function MenuSection({ onProgramPress }: IMenuSection) {
  const onMenuSectionFocused = ({ y }: { y: number }) => {
    window.scrollTo({ top: y - 15, behavior: "smooth" });
  };

  return (
    <div className="menu-section">
      {categories.map((category) => (
        <FocusableMenu
          focusKey={`menu-${category.id}`}
          key={category.id}
          {...category}
          onProgramPress={onProgramPress}
          onBecameFocused={onMenuSectionFocused}
          categoryIndex={category.id}
          categories
          programs
        />
      ))}
    </div>
  );
}
