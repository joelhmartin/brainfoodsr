import gsap from "gsap";
import { useEffect } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  useEffect(() => {
    gsap.fromTo(".team", { opacity: 0 }, { delay: 1, duration: 2, opacity: 1 });
  }, []);

  const teamMembers = [
    {
      name: "Charlie Moffet",
      title: "Badass",
      bio: "With over six years of industry experience, Charlie Moffet has established himself as a beacon of recovery services excellence. From founding \"Chuck and Joe's Sober Living\" to facilitating group sessions at a dual diagnosis center, his expertise spans diverse modalities. Committed to continuous learning, he pursues further education while championing the message that recovery unlocks boundless opportunities for all.",
      imageUrl: "https://via.placeholder.com/150",
      thumbnail: "/images/charles_thumb.png",
      socialLinks: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Justin Yoken",
      title: "Badass",
      bio: "Justin Yoken has been involved in addiction recovery since 2016, holding roles from Recovery Coach to Director of an aftercare program in Texas. He uses his personal experience of getting sober in 2014 to better assist his clients on their journey. \"Recovery has given me more than I could ever expect and I am so grateful that I was given the opportunity to get sober and be in recovery. If I was able to do it after ten years of substance use, then so can anyone.\"",
      imageUrl: "/images/justin_full.jpg",
      thumbnail: "/images/justin_thumb.png",
      socialLinks: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
  ];

  return (
    <>
      <div className="team w-4/5">
        <h1 className="text-5xl text-center pb-10">Meet the Team</h1>
        <div className="flex flex-wrap justify-center items-center">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
