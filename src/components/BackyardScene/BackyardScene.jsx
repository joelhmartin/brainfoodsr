import React from "react";
import BrainGuy from "../BrainGuy/BrainGuy";
import { Pool } from "./Pool";
import { Float } from "@react-three/drei";

const BackyardScene = () => {
  return (
    <>
      <group position={[5, -0.389, -2.3]} rotation={[0, -Math.PI / 4, 0]}>
        <group scale={0.8} position={[0, 0.1, 0.13]} rotation={[0, 2, 0]}>
          <Float floatIntensity={.1}>
            <BrainGuy />
          </Float>
        </group>

        <Pool scale={0.4} />
      </group>
    </>
  );
};

export default BackyardScene;
