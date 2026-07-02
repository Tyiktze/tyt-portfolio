import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Bench_01 } from "./Bench_01";
import Home from "../pages/Home";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Scroll html style={{ width: "100%" }}>
          <Home />
        </Scroll>
        <Scroll>
          <Bench_01 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
