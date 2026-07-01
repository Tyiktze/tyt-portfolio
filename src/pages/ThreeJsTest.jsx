import React from "react";
import "./TestStyle.css";
import Experience from "../components/Experience";
import { Canvas } from "@react-three/fiber";

const ThreeJsTest = () => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
};

export default ThreeJsTest;
