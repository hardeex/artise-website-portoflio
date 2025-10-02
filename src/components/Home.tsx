import React from "react";
import HeroSection from "./Intro";
import SoftMusicSection from "./MusicSection";
import AboutSection from "./AboutSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
       {/* <AboutSectionHome /> */}
       <AboutSection />
       <SoftMusicSection />
      {/* <MusicSection /> */}
     
    </>
  );
};

export default Home;
