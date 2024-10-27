import React from "react";
import Navbar from "../components/Navbar";
import ParallaxCarousel from "../components/ParallaxCarousel";
import Footer from "../components/Footer";
import { useTheme } from "../context/Theme";
const Cosplay = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <Navbar />
      <div className="dark:bg-black">
      <div>
      <h1 className="uppercase font-bold text-2xl text-center text-black bg-clip-text bg-gradient-to-r dark:text-pink-600">Intergalactic Cosplay Experience</h1>
      </div>
      <ParallaxCarousel />
      <Footer />
      </div>
    </div>
  );
};

export default Cosplay;
