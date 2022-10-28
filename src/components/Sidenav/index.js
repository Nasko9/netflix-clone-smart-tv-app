import React from "react";
import PropTypes from "prop-types";
import {
  initNavigation,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";

// Components
import NavItem from "./NavItem";

// Icons
import SearchIcon from "../Icons/SearchIcon";
import HomeIcon from "../Icons/HomeIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import MonitorIcon from "../Icons/MonitorIcon";
import ClapperboardIcon from "../Icons/ClapperboardIcon";
import PlusIcon from "../Icons/PlusIcon";

// Style
import "./index.css";

const navData = [
  { id: 0, logo: <SearchIcon />, title: "search" },
  { id: 1, logo: <HomeIcon />, title: "home" },
  { id: 2, logo: <CalendarIcon />, title: "calendar" },
  { id: 3, logo: <MonitorIcon />, title: "watch" },
  { id: 4, logo: <ClapperboardIcon />, title: "movies" },
  { id: 5, logo: <PlusIcon />, title: "favorites" },
];

// Initialization of navigation
initNavigation();

// Create focusable component
const FocusableNavItem = withFocusable()(NavItem);

class Sidenav extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onPressKey = this.onPressKey.bind(this);
  }

  componentDidMount() {
    this.props.setFocus();
    window.addEventListener("keydown", this.onPressKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onPressKey);
  }

  // Handler on press button
  onPressKey(event) {
    if (event.keyCode === 8) {
      this.props.setFocus();
    }
  }

  render() {
    return (
      <div className="sidenav">
        {navData.map((item) => (
          <FocusableNavItem {...item} focusKey={`sidenav-${item.id}`} />
        ))}
      </div>
    );
  }
}

// Type checking
Sidenav.propTypes = {
  setFocus: PropTypes.func.isRequired,
  hasFocusedChild: PropTypes.bool.isRequired,
};

export default Sidenav;
