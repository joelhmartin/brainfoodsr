// TeamCard.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TeamCard = ({ name, title, bio, imageUrl, socialLinks, thumbnail }) => {
  const cardRef = useRef();
  const cardInnerRef = useRef();
  const isFlipped = useRef(false);

  const handleCardClick = () => {
    if (isFlipped.current) {
      gsap.to(cardInnerRef.current, { rotationY: 0, duration: 0.8, ease: "power3.inOut" });
      isFlipped.current = false;
    } else {
      gsap.to(cardInnerRef.current, { rotationY: 180, duration: 0.8, ease: "power3.inOut" });
      isFlipped.current = true;
    }
  };

  return (
    <div className="w-1/2 h-80 perspective-1000 cursor-pointer" onClick={handleCardClick} ref={cardRef}>
      <div className="w-full h-full relative transform-style-preserv3d" ref={cardInnerRef}>
        <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center bg-blue-500 text-white p-4">
          <div className="text-lg">{name}</div>
          <div className="text-sm">{title}</div>
          <div className="flex items-center mt-2 gap-2">
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="absolute backface-hidden rotate-y-180 w-full h-full p-10 bg-green-500 text-white">
          <div className="w-24 h-24 rounded-full float-right overflow-hidden">
            <img src={thumbnail} alt={name} className="" />
          </div>

          <div>{bio}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
