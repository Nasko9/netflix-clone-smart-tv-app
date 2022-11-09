import React from "react";

// Interface
import "./index.css";

// Type
interface IHero {
  program: {
    color: string;
    title: string;
  } | null;
}

export default function Hero({ program }: IHero) {
  return (
    <div
      className="hero"
      style={{ backgroundColor: program ? program.color : "#B9090B" }}
    >
      <h1>{program ? program.title : "No program"}</h1>
    </div>
  );
}
