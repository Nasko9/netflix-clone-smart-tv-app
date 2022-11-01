import React from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import Sidenav from "./Sidenav";
import Content from "./Content";

// Style
import "./index.css";

// Create focusable component
const FocusableSidenav = withFocusable({
  trackChildren: true,
})(Sidenav);
const FocusableContent = withFocusable()(Content);

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onWheel = this.onWheel.bind(this);
    this.throttledWheelHandler = throttle(
      this.throttledWheelHandler.bind(this),
      500,
      { trailing: false }
    );
  }

  componentDidMount() {
    window.addEventListener("wheel", this.onWheel, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.onWheel);
  }

  onWheel(event) {
    event.preventDefault();
    this.throttledWheelHandler(event);
  }

  throttledWheelHandler(event) {
    event.preventDefault();
    const { deltaY, deltaX } = event;
    const { navigateByDirection } = this.props;

    if (deltaY > 1) {
      navigateByDirection("down");
    } else if (deltaY < 0) {
      navigateByDirection("up");
    } else if (deltaX > 1) {
      navigateByDirection("right");
    } else if (deltaX < 1) {
      navigateByDirection("left");
    }
  }

  render() {
    return (
      <div className="navigation">
        <FocusableSidenav focusKey={"sidenav"} />
        <FocusableContent focusKey={"content"} />
      </div>
    );
  }
}

// Type checking
Navigation.propTypes = {
  navigateByDirection: PropTypes.func.isRequired,
};

export default Navigation;
