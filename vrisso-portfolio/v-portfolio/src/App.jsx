import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";
import MyWork from "./components/mywork";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
