import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import SeparatorBorder from "./components/separator-border";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <SeparatorBorder />
      <About />
      <SeparatorBorder />
      <Projects />
      <SeparatorBorder />
      <Skills />
      <SeparatorBorder />
      <Contact />
      <SeparatorBorder />
      <Footer />
    </div>
  );
}

export default App;
