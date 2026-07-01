import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Bench_01 } from "./Bench_01";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Bench_01 />
    </>
  );
};

export default Experience;
