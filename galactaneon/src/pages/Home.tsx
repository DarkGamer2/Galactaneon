import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import GalaxyWallpaper from "../assets/media/images/uwp3583259.jpeg";
import welcomeWallpaper from "../assets/media/images/wp4575207-4k-galaxy-wallpapers.jpg";
import Footer from "../components/Footer";
import { useTheme } from "../context/Theme";
import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
const Home = () => {
   const [bgOpacity, setBgOpacity] = useState(0.7);
    const [textOpacity, setTextOpacity] = useState(1);
  const { theme } = useTheme();
  return (
    <main className={`w-full shadow ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Navbar />
      {/* <Carousel /> */}
      <div className="">
        <img src={GalaxyWallpaper} alt="galaxy" />
      </div>
      <section className="dark:bg-black">
        <div className="flex h-60">
          <img
            className="float-left"
            height="500"
            width="300"
            src={welcomeWallpaper}
          />
          <div className="mx-4">
          <motion.h1  className="uppercase text-cyan-500 text-4xl md:text-6xl lg:text-8xl font-androidAssassin text-center"
      initial={{ textShadow: `0 0 5px rgba(255, 0, 255, ${textOpacity}), 
                               0 0 10px rgba(0, 234, 255, ${textOpacity * 0.8}), 
                               0 0 15px rgba(0, 234, 255, ${textOpacity * 0.6})` }}
      whileHover={{
        textShadow: `0 0 10px rgba(255, 0, 255, 1), 
                     0 0 20px rgba(0, 234, 255, 0.9), 
                     0 0 30px rgba(0, 234, 255, 0.8)`,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}>
  a galaxy awaits!
</motion.h1>

            <p className="dark:text-white font-starCruiser text-lg font-medium my-3 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              perferendis neque mollitia consequatur ullam laudantium delectus
              nesciunt consequuntur? Perferendis iure a soluta deleniti quam
              veniam tenetur qui voluptates, earum dolores? Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Accusantium architecto
              expedita rerum iure optio blanditiis obcaecati a eius fuga sed
              odio, id, nisi, pariatur magnam in eligendi exercitationem cumque
              libero?
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
