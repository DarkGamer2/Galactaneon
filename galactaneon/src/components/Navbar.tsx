import { useState, useContext } from "react";
import navItemClickAudio from "../assets/media/audio/Sound Effect sci fi beep electric 2.mp3";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/Theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navLinkAudio = new Audio(navItemClickAudio);

  const navClick = () => {
    navLinkAudio.play();
  };

  // const onHover = () => {
  //   navLinkAudio.play();
  // };

  // const onStop = () => {
  //   navLinkAudio.pause();
  // };
  return (
    <header className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-black py-3">
        <nav>
          <ul className="flex uppercase items-center justify-between tracking-wide dark:text-blue-600 text-black sm:flex-col md:flex-row lg:flex-row">
            <h3 className="uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-Galacticagrid font-bold text-3xl">
              Galactaneon
            </h3>
            <button
              onClick={navClick}
              // onMouseEnter={onHover}
              // onMouseOver={onStop}
            >
              <NavLink to={"/"}>
                <li className="font-androidAssassin font-semibold text-xl uppercase dark:hover:text-pink-600">
                  home
                </li>
              </NavLink>
            </button>
            <button onClick={navClick}>
              <NavLink to={"/about"}>
                <li className="font-androidAssassin font-semibold text-xl uppercase dark:hover:text-pink-600">
                  about
                </li>
              </NavLink>
            </button>
            <button onClick={navClick}>
              <NavLink to={"/cosplay"}>
                <li className="font-androidAssassin font-semibold text-xl uppercase dark:hover:text-pink-600">
                  cosplay
                </li>
              </NavLink>
            </button>
            <button onClick={navClick}>
              <NavLink to={"/events"}>
                <li className="font-androidAssassin font-semibold text-xl uppercase dark:hover:text-pink-600">
                  Events
                </li>
              </NavLink>
            </button>

            <button onClick={navClick}>
              <NavLink to={"/gettickets"}>
                <li className="font-androidAssassin font-semibold text-xl uppercase dark:hover:text-pink-600">
                  Get tickets
                </li>
              </NavLink>
            </button>
            <ul className="flex sm:flex-col md:flex-row lg:flex-row">
              <li>
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button
                    onClick={toggleTheme}
                    className="relative px-3 py-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white"
                  >
                    <span className="flex items-center space-x-5">
                      <DarkModeIcon />
                    </span>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </div>
              </li>
              <li>
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-3 py-2 bg-blue-500 rounded-md leading-none flex items-center text-white duration-300 divide-x divide-white shadow-lg shadow-cyan-500/75">
                    <span className="flex items-center space-x-5">
                      <LoginIcon />
                    </span>
                    Login
                  </button>
                </div>
              </li>
              <li>
                <div className="relative group mx-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-3 py-2 bg-indigo-600 rounded-md leading-none flex items-center text-white duration-300 divide-x divide-white shadow-lg shadow-purple-500/75">
                    <span className="flex items-center space-x-5">
                      <VpnKeyIcon />
                    </span>
                    Sign Up
                  </button>
                </div>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
