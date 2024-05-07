import gsap from "gsap";
import { useEffect } from "react";

const Coaching = () => {
  useEffect(() => {
    gsap.fromTo(".coaching", { opacity: 0 }, { duration: 2, opacity: 1 });
  }, []);
  
  return (
    <>
      <div className="coaching bg-white w-1/2 p-4 rounded-md z-0">
        <h1 className="text-5xl">What is a Recovery Coach's Role</h1>
        <h2 className="text-2xl">
          Brain Food Recovery Coaches occupy Seven Main Roles with each Client:
        </h2>
        <ul>
          <li>- Resource Manager</li>
          <li>- Advocate</li>
          <li>- Motivator</li>
          <li>- Problem Solver</li>
          <li>- Ally & Confidant</li>
          <li>- Model & Mentor</li>
          <li>- Truth Teller</li>
        </ul>
      </div>
    </>
  );
};

export default Coaching;
