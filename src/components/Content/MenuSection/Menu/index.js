import React from "react";
import PropTypes from "prop-types";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Card from "./Card";

// Style
import "./index.css";

// Create focusable component
const FocusableCard = withFocusable()(Card);

const menus = [
  {
    title: "Featured",
  },
  {
    title: "Cool",
  },
  {
    title: "Decent",
  },
];

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

    this.scrollRef = null;

    this.onProgramFocused = this.onProgramFocused.bind(this);
    this.onProgramArrowPress = this.onProgramArrowPress.bind(this);
  }

  onProgramFocused({ x }) {
    this.scrollRef.scrollTo({
      x,
    });
  }

  onProgramArrowPress(direction, { menuIndex, programIndex }) {
    if (
      direction === "right" &&
      programIndex === programs.length - 1 &&
      menuIndex < menus.length - 1
    ) {
      this.props.setFocus(`menu-${menuIndex + 1}`);
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="menu">
        <h2 className="menu-title">{this.props.title}</h2>
        <div
          className="card-section"
          ref={(reference) => {
            if (reference) {
              this.scrollRef = reference;
            }
          }}
        >
          {programs.map((program) => (
            <FocusableCard
              {...program}
              focusKey={`card-${this.props.realFocusKey}-${program.id}`}
              onPress={() => this.props.onPress(program)}
              onEnterPress={this.props.onProgramPress}
              key={program.id}
              onBecameFocused={this.onProgramFocused}
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

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  onProgramPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired,
  categoryIndex: PropTypes.number.isRequired,
  setFocus: PropTypes.func.isRequired,
};

export default Menu;
