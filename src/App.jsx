import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <HeroSection className="flex-1" />
    </div>
  );
};

export default App;
