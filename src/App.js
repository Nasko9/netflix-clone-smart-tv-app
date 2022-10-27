import React from "react";

// Components
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Hero />
        <Menu />
        <Menu />
        <Menu />
      </div>
    </div>
  );
}

export default App;
