import React from "react";
import PropTypes from "prop-types";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Menu from "./Menu";

// Style
import "./index.css";

// Data
const categories = [
  {
    id: 0,
    title: "Featured",
  },
  // {
  //   id: 1,
  //   title: "Cool",
  // },
  // {
  //   id: 2,
  //   title: "Decent",
  // },
];

// Create focusable component
const FocusableMenu = withFocusable()(Menu);

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
      >
        {categories.map((category) => (
          <FocusableMenu
            {...category}
            focuKey={`menu-${category.id}`}
            onProgramPress={this.props.onProgramPress}
            key={category.id}
            onBecameFocused={this.onCategoryFocused}
            categoryIndex={category.id}
          />
        ))}
      </div>
    );
  }
}

MenuSection.propTypes = {
  onProgramPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired,
};

export default MenuSection;
