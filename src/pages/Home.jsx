/*
Navbar
Hero
About
Projects
Skills
Contact
Footer
*/

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
