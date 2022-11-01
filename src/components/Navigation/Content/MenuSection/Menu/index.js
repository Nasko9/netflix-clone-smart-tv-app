import React from "react";
import PropTypes from "prop-types";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Component
import Card from "./Card";

// Style
import "./index.css";

// Create focusable component
const FocusableCard = withFocusable()(Card);

// Data
const programs = [
  {
    id: 0,
    title: "Program 1",
    color: "#fff",
  },
  {
    id: 1,
    title: "Program 2",
    color: "#dd4558",
  },
  {
    id: 2,
    title: "Program 3",
    color: "#7ddd6a",
  },
  {
    id: 3,
    title: "Program 4",
    color: "#dddd4d",
  },
  {
    id: 4,
    title: "Program 5",
    color: "#8299dd",
  },
  {
    id: 5,
    title: "Program 6",
    color: "#edab83",
  },
  {
    id: 6,
    title: "Program 7",
    color: "#60ed9e",
  },
  {
    id: 7,
    title: "Program 8",
    color: "#d15fb6",
  },
  {
    id: 8,
    title: "Program 9",
    color: "red",
  },
];

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scrollref = null;
    this.onProgramFocused = this.onProgramFocused.bind(this);
    this.onProgramArrowPress = this.onProgramArrowPress.bind(this);
  }

  onProgramFocused({ x }) {
    this.scrollref.scrollTo({ x });
  }

  onProgramArrowPress(direction, { categoryIndex, programIndex }) {
    if (
      direction === "right" &&
      programIndex === programs.length - 1 &&
      categoryIndex < this.props.categories.legth - 1
    ) {
      this.props.setFocus(`menu-${categoryIndex + 1}`);
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div className="menu">
          {programs.map((program) => (
            <FocusableCard
              focusKey={`card-${this.props.realFocusKey}-${program.id}`}
              {...program}
              onPress={() => this.props.onProgramPress(program)}
              onEnterPress={this.props.onProgramPress}
              key={program.id}
              onBecomeFocused={this.onProgramFocused}
              onArrowPress={this.onProgramArrowPress}
              programIndex={program.id}
              categoryIndex={this.props.categoryIndex}
            />
          ))}
        </div>
      </div>
    );
  }
}

// Type checking
//! Danger posibly mistake
Menu.propTypes = {
  title: PropTypes.string.isRequired,
  onProgramPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired,
  categoryIndex: PropTypes.number.isRequired,
  setFocus: PropTypes.func.isRequired,
};

export default Menu;
