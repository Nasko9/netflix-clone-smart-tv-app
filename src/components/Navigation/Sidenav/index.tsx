import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Components
import NavItem from "./NavItem";

// Icons
import SearchIcon from "../../Icons/SearchIcon";
import HomeIcon from "../../Icons/HomeIcon";
import CalendarIcon from "../../Icons/CalendarIcon";
import MonitorIcon from "../../Icons/MonitorIcon";
import ClapperboardIcon from "../../Icons/ClapperboardIcon";
import PlusIcon from "../../Icons/PlusIcon";

// Style
import "./index.css";

// Create focusable component
const FocusableNavItem = withFocusable()(NavItem);

// Data
const navData = [
  { id: 0, logo: <SearchIcon />, title: "search" },
  { id: 1, logo: <HomeIcon />, title: "home" },
  { id: 2, logo: <CalendarIcon />, title: "calendar" },
  { id: 3, logo: <MonitorIcon />, title: "watch" },
  { id: 4, logo: <ClapperboardIcon />, title: "movies" },
  { id: 5, logo: <PlusIcon />, title: "favorites" },
];

export default function Sidenav() {
  return (
    <div className="sidenav">
      {navData.map((item) => (
        <FocusableNavItem
          {...item}
          key={item.id}
          focusKey={`sidenav-item-${item.id}`}
        />
      ))}
    </div>
  );
}
