import {
  CameraControls,
  Html,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  useFont,
} from "@react-three/drei";
import { degToRad, lerp } from "three/src/math/MathUtils";
import { useEffect, useRef, useState } from "react";
import TextScene from "./TextScene";
import { Color } from "three";
import { currentPageAtom } from "./HTML/NavBar";
import { useAtom } from "jotai";
import BuildingScene from "./BuildingScene/BuildingScene";
import BackyardScene from "./BackyardScene/BackyardScene.jsx";
import { useFrame } from "@react-three/fiber";

const bloomColor = new Color("#bla");
bloomColor.multiplyScalar(1.2);

export const Experience = () => {
  const controls = useRef();

  //this reverses the rotation setting so it doesnt revolve to the wrong side
  const [rotated, setIsRotated] = useState(false)

  // FITTING BOXES
  const meshFitHome = useRef();
  const meshFitTeam = useRef();
  const meshFitContact = useRef();
  const meshFitCoaching = useRef();

  // SCENES
  const buildingRef = useRef();
  const backyardRef = useRef();
  const textMaterial = useRef();

  // ATOMS
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);


  const intro = async () => {
    controls.current.dolly(-20);
    setTimeout(() => {
      setCurrentPage("home");
    }, 1000);
    fitCamera();
  };

  const fitCamera = async () => {
    if (rotated) {
      controls.current.rotate(-Math.PI / 2, 0, true);
      setIsRotated(false)
    }

    if (currentPage === "coaching") {
      controls.current.fitToBox(meshFitCoaching.current, true);
      controls.current.smoothTime = 0.8;
      controls.current.rotate(-Math.PI / 4, 0, true);
    } 
    else if (currentPage === "team") {
      controls.current.fitToBox(meshFitTeam.current, true);
      controls.current.smoothTime = 0.8;
      controls.current.rotate(Math.PI / 2, 0, true);
      setIsRotated(true)
    }
    else if (currentPage === "contact") {
      controls.current.fitToBox(meshFitContact.current, true);
      controls.current.smoothTime = 0.8;
      controls.current.rotate(Math.PI / 2, 0, true);
      setIsRotated(true)
    }
    else {
      controls.current.fitToBox(meshFitHome.current, true);
      controls.current.smoothTime = 1;
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  useFrame((_, delta) => {
    textMaterial.current.opacity = lerp(
      textMaterial.current.opacity,
      currentPage === "home" || currentPage === "intro" ? 1 : 0,
      delta * 3
    );
  });

  return (
    <>
      <CameraControls ref={controls} />
      <ambientLight />
      <directionalLight
        castShadow
        position={[2, 0, 0]}
        target={buildingRef.current}
        color={"pink"}
        intensity={1}
      />



      {/* FITTING BOXES */}
      <mesh
        ref={meshFitHome}
        anchorY={"bottom"}
        position={[-0.5, 1, 1.5]}
        visible={false}
      >
        <boxGeometry args={[10, 2, 2]} />
        <meshBasicMaterial color={"purple"} transparent opacity={0.5} />
      </mesh>

      <mesh
        ref={meshFitCoaching}
        position={[2.7, 1.25, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        visible={false}
      >
        <boxGeometry args={[2, 3, 2]} />
        <meshBasicMaterial color={"red"} transparent opacity={0.5} />
      </mesh>

      <mesh
        ref={meshFitContact}
        position={[2.7, 1.25, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        visible={false}
      >
        <boxGeometry args={[2, 3, 2]} />
        <meshBasicMaterial color={"red"} transparent opacity={0.5} />
      </mesh>

      <mesh
        ref={meshFitTeam}
        position={[4, 1.25, -1.3]}
        rotation={[0, -Math.PI / 4, 0]}
        visible={false}
      >
        <boxGeometry args={[4, 3, 2]} />
        <meshBasicMaterial color={"white"} transparent opacity={0.5} />
      </mesh>



      {/* TEXT */}
      <Text
        font="/Fonts/Poppins/Poppins-Black.ttf"
        position={[-2.3, 0, 1]}
        maxWidth={3}
        lineHeight={0.8}
        rotation={[0, degToRad(30), 0]}
        anchorY={"bottom"}
      >
        BRAINFOOD RECOVERY SERVICES
        <meshStandardMaterial
          ref={textMaterial}
          color={bloomColor}
          toneMapped={false}
        >
          <RenderTexture attach={"map"}>
            <TextScene />
          </RenderTexture>
        </meshStandardMaterial>
      </Text>

      {/* FOR SCENE FITTINGS}

      {/* BUILDING SCENE */}
      <group receiveShadow castShadow ref={buildingRef}>
        <BuildingScene
          scale={0.6}
          position={[3, 0, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        />
      </group>

      {/* BACKYARD SCENE */}
      <group receiveShadow castShadow ref={backyardRef}>
        <BackyardScene
          scale={0.6}
          position={[3, 0, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        />
      </group>

      {/* FLOOR */}
      <mesh position={[-0.48, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={10}
          mixStrength={5}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          color="#cb415b"
          metalness={0.5}
        />
      </mesh>
    </>
  );
};

useFont.preload("/Fonts/Poppins/Poppins-Black.ttf");
