import React from "react";

// Components
import MenuItem from "./MenuItem";

// Style
import "./index.css";
import SearchIcon from "../Icons/SearchIcon";
import HomeIcon from "../Icons/HomeIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import MonitorIcon from "../Icons/MonitorIcon";
import ClapperboardIcon from "../Icons/ClapperboardIcon";
import PlusIcon from "../Icons/PlusIcon";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <MenuItem focused={true} logo={<SearchIcon />} />
      <MenuItem focused={false} logo={<HomeIcon />} />
      <MenuItem focused={false} logo={<CalendarIcon />} />
      <MenuItem focused={false} logo={<MonitorIcon />} />
      <MenuItem focused={false} logo={<ClapperboardIcon />} />
      <MenuItem focused={false} logo={<PlusIcon />} />
    </div>
  );
}
