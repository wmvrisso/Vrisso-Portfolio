import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";
import MyWork from "./components/mywork";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      {/* Add section-bg to each section for individual gradient */}
      <About className="section-bg" />
      <Skills className="section-bg" />
      <Services className="section-bg" />
      <MyWork className="section-bg" />
      <Contact className="section-bg" />

      <Footer />
    </div>
  );
};

export default App;
