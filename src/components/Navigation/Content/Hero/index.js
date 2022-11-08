import React from "react";

import "./index.css";

export default function Hero({ program }) {
  return (
    <div
      className="hero"
      style={{ backgroundColor: program ? program.color : "#B9090B" }}
    >
      <h1>{program ? program.title : "No program"}</h1>
    </div>
  );
}
