import React from "react";
import PropTypes from "prop-types";
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

class MenuSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scrollRef = null;
    this.onCategoryFocused = this.onCategoryFocused.bind(this);
  }

  onCategoryFocused({ y }) {
    this.scrollRef.scrollTo({
      y,
    });
  }

  render() {
    return (
      <div
        ref={(reference) => {
          if (reference) {
            this.scrollRef = reference;
          }
        }}
        className="menu-section"
      >
        {categories.map((category) => (
          <FocusableMenu
            focusKey={`menu-${category.id}`}
            key={category.id}
            {...category}
            onProgramPress={this.props.onProgramPress}
            onBecameFocused={this.onCategoryFocused}
            categoryIndex={category.id}
            categories
          />
        ))}
      </div>
    );
  }
}

// Type checking
MenuSection.propTypes = {
  onProgramPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired,
};

export default MenuSection;
