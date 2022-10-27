import React from "react";
import Card from "./Card";

import "./index.css";

export default function Menu() {
  return (
    <div className="menu">
      <h2 className="menu-title">Trending Now</h2>
      <div className="card-section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
