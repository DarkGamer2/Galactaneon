import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeachParty from "../assets/media/images/160998-425x282r1-Teens-on-the-beach.jpg";
import { useTheme } from "../context/Theme";
import Section from "../components/Section";
import { AnimatePresence,motion } from "framer-motion";

const About = () => {
  const { theme } = useTheme();
  const [bgOpacity, setBgOpacity] = useState(0.7);
  const [textOpacity, setTextOpacity] = useState(1);
  const [video, setVideo] = useState("/src/assets/media/videos/[appsgolem.com][00-00-17][00-00-40]_Miami_Nights_1984_-_Accelerate.mp4");
  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className="bg-white dark:bg-black">
      
        <section>
          <div>
           
           
            <section className="bg-black/70 relative">
  <div className="sticky h-screen inset-0">
    <AnimatePresence mode="popLayout">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        src={video}
        key={video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      />
    </AnimatePresence>
    <motion.div
      className="absolute inset-0 bg-black"
      style={{ opacity: bgOpacity }}
    />
  </div>
  
  <Section
    video="/src/assets/media/videos/[appsgolem.com][00-00-17][00-00-40]_Miami_Nights_1984_-_Accelerate.mp4"
    setVideo={setVideo}
    setBgOpacity={setBgOpacity}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="uppercase text-pink-500 text-4xl md:text-6xl lg:text-8xl font-androidAssassin"
      style={{
        textShadow: `0 0 5px rgba(255, 0, 255, ${textOpacity}), 
                     0 0 10px rgba(255, 0, 255, ${textOpacity * 0.8}), 
                     0 0 15px rgba(255, 0, 255, ${textOpacity * 0.6})`,
      }}
    >
      LEARN ABOUT OUR GALAXY
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed text-center px-4 md:px-8"
    >
      Dive into the mysteries of the universe and explore the wonders of our galaxy.
      Embark on a journey that will take you through the stars, planets, and beyond.
    </motion.p>
  </Section>
</section>

          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;
