import React from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";

const Login = () => {
  const { theme } = useTheme();

  // Define the background color for the inner element based on the theme
  const innerBgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const innerTextColorClass = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';

  // **CRUCIAL:** The classes for the animated gradient border
  const animatedBorderClasses = `
    p-0.5 rounded-lg overflow-hidden relative // Basic border and shape
    bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 // Gradient colors
    bg-[length:400%_400%] // Crucial: Makes the background big enough to move
    animate-background-move // The custom animation utility from tailwind.config.js
  `;

  return (
    <div>
      <Navbar />
      <div className={`w-full h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
        {/* Your Login heading with text gradient is correct */}
        <h1 className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text font-galindo text-2xl text-center text-transparent uppercase mb-8">Login</h1>
        
        <form className="p-8 space-y-4 rounded-xl shadow-lg w-full max-w-sm">
          
          {/* Username Field - You can apply the static gradient border trick here too if you want it */}
          <div>
            <label className="block text-xl text-cyan-500">Username</label>
            <input type="text" className="mt-1 w-full p-2 rounded-md outline-none border border-gray-300 focus:border-cyan-500"/>
          </div>

          {/* Password Field - This is where the animated gradient border is applied */}
              <label className="block text-xl text-cyan-500">Password</label>
         <div className={animatedBorderClasses}>
    {/* The Inner Input container - this replaces the inner div you had before */}
    <div className={`p-2 ${innerBgClass} rounded-[calc(0.5rem-0.5px)]`}>
      <input 
        type="password" 
        // Note: The p-2 padding is on the inner div, so we remove padding from the input itself
        className={`w-full bg-transparent border-none focus:ring-0 ${innerTextColorClass} py-3 rounded-md outline-none`}
      />
    </div>
  </div>
          
          <div className="text-center pt-4">
            <button className="uppercase bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;