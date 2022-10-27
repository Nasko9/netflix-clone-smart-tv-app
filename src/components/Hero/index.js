import React from "react";
import PlayIcon from "../Icons/PlayIcon";

import "./index.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Lorem Ipsum</h1>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
      </p>
      <div className="btn-section">
        <button className="btn play">
          <PlayIcon /> Play
        </button>
        <button className="btn info">More Info</button>
      </div>
    </div>
  );
}
