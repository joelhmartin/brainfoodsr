import gsap from "gsap";
import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useEffect(() => {
    gsap.fromTo(".navvy", { opacity: 0 }, { duration: 2, opacity: 1 });
  }, []);

  function handleClick(label) {
    setCurrentPage(label);
    setMenuOpened(false);
  }

  return (
    <div
      className="navvy p-6 w-full fixed top-0 left-0 flex justify-between items-center z-50"
    >
      {/* LOGO */}
      <a className="w-1/12" href="/">
        <img style={{ minWidth: "50px" }} src="/images/logo.png" alt="Logo" />
      </a>

      {/* MENU */}
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className=" p-3 bg-pink-600 w-11 h-11 rounded-md z-50"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        {/* MENU LIST */}
        {/* prettier-ignore */}
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8 z-50">
          <MenuButton label="Home" onClick={() => handleClick('home')} />
          <MenuButton label="Recovery Coaching" onClick={() => handleClick('coaching')}/>
          <MenuButton label="The Team" onClick={() => handleClick('team')} />
          <MenuButton label="Contact" onClick={() => handleClick('contact')} />
        </div>
      </div>
    </div>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};

export default NavBar;
