import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Import the 'THREE' namespace
import { Udon } from "./Udon";

interface Props {
  mouseX: number;
  mouseY: number;
}

const Experiment = ({ mouseX, mouseY }: Props) => {
  return (
    <>
      <OrbitControls enableZoom={false} minZoom={150} enableRotate={false} />
      <Udon rotationX={mouseY} rotationY={mouseX} />
    </>
  );
};

export default Experiment;
