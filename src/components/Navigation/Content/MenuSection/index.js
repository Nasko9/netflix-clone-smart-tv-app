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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div ref={this.scrollRef} className="menu-section">
        {categories.map((category, index) => (
          <FocusableMenu
            focusKey={`menu-${category.id}`}
            key={category.id}
            {...category}
            onProgramPress={this.props.onProgramPress}
            categoryIndex={index}
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
