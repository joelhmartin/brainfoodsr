import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import NavBar from "./components/HTML/NavBar";
import Footer from "./components/HTML/Footer";
import { Suspense } from "react";
import { useAtom } from "jotai";
import { currentPageAtom } from "./components/HTML/NavBar";
import Overlay from "./components/HTML/Overlay";
function App() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  
  return (
    <>


      <Canvas shadows camera={{ position: [0, 1, 20], fov: 42 }}>
        <color attach="background" args={["#FDB0C0"]} />
        <fog attach="fog" args={["#FDB0C0", 30, 34]} />

        <Suspense>
          <Experience />
        </Suspense>

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1.2}/>
        </EffectComposer>

      </Canvas>

      {currentPage != "intro" && <NavBar />}
      {currentPage != "intro" && <Overlay />}
      {currentPage === "home" && <Footer />}
    </>
  );
}

export default App;
