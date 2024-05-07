import { useAtom } from "jotai";
import { currentPageAtom } from "./NavBar";
import Coaching from "./Coaching";
import Contact from "./Contact";
import Team from "./Team";

const Overlay = (rotation) => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
      {currentPage === "coaching" && <Coaching />}
      {currentPage === "team" && <Team />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
};

export default Overlay;
