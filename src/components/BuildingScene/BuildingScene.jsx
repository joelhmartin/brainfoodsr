import React from "react";
import { House } from "./House";
import { Tree } from "./Tree";

const BuildingScene = () => {

  return (
    <group position={[2.7, 0, 0]}>
      <House scale={2} rotation={[0, -Math.PI / 4, 0]} />
      <Tree scale={0.1} position={[1, 0, 2]} />
      <Tree scale={0.05} position={[0.5, 0, 2]} />
      <Tree scale={0.05} position={[-1.4, 0, -0.9]} />
    </group>
  );
};

export default BuildingScene;
