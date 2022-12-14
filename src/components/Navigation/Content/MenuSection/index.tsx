import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Menu from "./Menu";

// Style
import "./index.css";
import useMenuSection from "./useMenuSection";

// Type
interface IMenuSection {
  onProgramPress: () => void;
}

// Create focusable component
const FocusableMenu = withFocusable()(Menu);

export default function MenuSection({ onProgramPress }: IMenuSection) {
  const { onMenuSectionFocused, categories } = useMenuSection();

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
          programs={category.programs}
          categories
        />
      ))}
    </div>
  );
}
