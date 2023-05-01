import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
type DarkModeProps = {
  darkMode: boolean;
  setDarkMode: any;
};

const DarkModeToggle = ({ darkMode, setDarkMode }: DarkModeProps) => {
  const enableDarkMode: React.MouseEventHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="relative group mx-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button
        onClick={enableDarkMode}
        className="relative px-3 py-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white"
      >
        <span className="flex items-center space-x-5">
          <DarkModeIcon />
        </span>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
