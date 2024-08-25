import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experiment from "./udon/Experiment";

const CatalogueMain = () => {
  const yOffset = 0.7;
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(yOffset - 0.1);

  const handleMouseMove = (event: any) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Normalize the X coordinate (-1 for left edge, 1 for right edge)
    const sensitivity = 0.3;
    const normalizedX = ((event.clientX - centerX) / centerX) * sensitivity;
    const normalizedY =
      ((event.clientY - centerY) / centerY) * sensitivity + yOffset;

    setMouseX(normalizedX);
    setMouseY(normalizedY);
  };

  return (
    <Canvas onPointerMove={handleMouseMove}>
      <Experiment mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
};

export default CatalogueMain;
