import { Cloud, Environment, Float, Sparkles } from "@react-three/drei";
import React from "react";
import BrainGuy from "./BrainGuy/BrainGuy";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const TextScene = () => {
  const cloudTexture = useLoader(THREE.TextureLoader, "/Textures/brainVHS.gif");

  return (
    <>
      <color attach={"background"} args={["#353839"]} />
      <Environment preset="sunset" />

      <Cloud
        concentrate="outside"
        growth={100}
        color="grey"
        opacity={1}
        seed={0.3}
        bounds={200}
        volume={200}
        speed={.5}
      />
      <Cloud
        position-z={-10}
        concentrate="outside"
        growth={100}
        color="#d6b4fc"
        opacity={1}
        seed={0.3}
        bounds={400}
        volume={400}
        speed={1}
      />
    </>
  );
};

export default TextScene;
