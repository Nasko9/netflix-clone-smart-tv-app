import React, { useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import { useHistory } from "react-router-dom";

// Components
import SideMenuItem from "./SideMenuItem";

// Icons
import SearchIcon from "../Icons/SearchIcon";
import HomeIcon from "../Icons/HomeIcon";
import MonitorIcon from "../Icons/MonitorIcon";
import ClapperboardIcon from "../Icons/ClapperboardIcon";
import PlusIcon from "../Icons/PlusIcon";

// Style
import "./index.css";

// Create focusable component
const FocusableSideMenuItem = withFocusable()(SideMenuItem);

// Data
const navData = [
  { id: 0, logo: <SearchIcon />, title: "search", page: "/search" },
  { id: 1, logo: <HomeIcon />, title: "home", page: "/" },
  { id: 2, logo: <MonitorIcon />, title: "shows", page: "/shows" },
  { id: 3, logo: <ClapperboardIcon />, title: "movies", page: "/movies" },
  { id: 4, logo: <PlusIcon />, title: "favorites", page: "/favorites" },
];

export default function SideMenu() {
  let history = useHistory();

  return (
    <div className="sidenav">
      {navData.map((item) => (
        <FocusableSideMenuItem
          {...item}
          key={item.id}
          focusKey={`side-menu-item-${item.id}`}
          onEnterPress={() => history.push(item.page)}
        />
      ))}
    </div>
  );
}
