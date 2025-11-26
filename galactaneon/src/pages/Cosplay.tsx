import React from "react";
import Navbar from "../components/Navbar";
import ParallaxCarousel from "../components/ParallaxCarousel";
import Footer from "../components/Footer";
import { useTheme } from "../context/Theme";
import Data from "../Data/items.json";
import CosplayCard from "../components/CosplayCard";
const Cosplay = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <Navbar />
      <div className="dark:bg-black">
      <div>
      <h1 className="uppercase font-bold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 font-galindo">Intergalactic Cosplay Experience</h1>
      </div>
      <ParallaxCarousel />
      <h1 className="dark:text-white">Cosplay Gallery</h1>
      {Data.map((item, index) => (
        <CosplayCard key={index} title={item.title}/>
      ))}
      <Footer />
      </div>
    </div>
  );
};

export default Cosplay;
