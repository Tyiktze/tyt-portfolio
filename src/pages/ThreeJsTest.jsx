import React from "react";
import "./TestStyle.css";
import Experience from "../components/Experience";
import { Canvas } from "@react-three/fiber";

const ThreeJsTest = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};

export default ThreeJsTest;
