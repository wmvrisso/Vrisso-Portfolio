import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
// import Services from "./components/services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
    </div>
  );
};

export default App;
