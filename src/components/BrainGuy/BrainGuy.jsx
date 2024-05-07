import React from "react";
import { Brain } from "./Brain";
import { Glasses } from "./Glasses";
import { Float } from "@react-three/drei";

const BrainGuy = () => {
  return (
      <group scale={2} position={[.3,0,0]}>
        <group>
          <Brain />
        </group>

        <group scale={2.9} position={[0, 0.217, 0.16]}>
          <Glasses />
        </group>
      </group>
  );
};

export default BrainGuy;
