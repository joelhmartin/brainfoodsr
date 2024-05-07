import gsap from "gsap";
import { useEffect } from "react";


const Team = () => {
  useEffect(() => {
    gsap.fromTo(".contact", { opacity: 0 }, { delay: 1, duration: 2, opacity: 1 });
  }, []);
  return (
    <>
      <div className="contact">
        <h1 className="text-5xl">Contact</h1>
      </div>
    </>
  );
};

export default Team;
