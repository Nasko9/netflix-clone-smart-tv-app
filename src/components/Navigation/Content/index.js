import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Hero from "./Hero";
import MenuSection from "./MenuSection";

// Style
import "./index.css";

// Create focusable component
const FocusableMenuSection = withFocusable()(MenuSection);

// Data
const KEY_ENTER = "enter";
const B_KEY = 66;

class Content extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentProgram: null,
      blockNavigationOut: false,
    };

    this.onPressKey = this.onPressKey.bind(this);
    this.onProgramPress = this.onProgramPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onPressKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onPressKey);
  }

  onPressKey(event) {
    if (event.keyCode === B_KEY) {
      const { blockNavigationOut: blocked } = this.state;

      console.warn(
        `blockNavigationOut: ${!blocked}. Press B to ${
          blocked ? "block" : "unblock "
        }`
      );
      this.setState((prevState) => ({
        blockNavigationOut: !prevState.blockNavigationOut,
      }));
    }
  }

  onProgramPress(programProps, { pressedKeys } = {}) {
    if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
      return;
    }
    this.setState({
      currentProgram: programProps,
    });
  }

  render() {
    const { blockNavigationOut } = this.state;

    return (
      <div className="content">
        <Hero program={this.state.currentProgram} />
        <FocusableMenuSection
          focusKey={"menu-section"}
          onProgramPress={this.onProgramPress}
          blockNavigationOut={blockNavigationOut}
        />
      </div>
    );
  }
}

export default Content;
