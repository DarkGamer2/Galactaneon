import { useState } from "react";
import navItemClickAudio from "../assets/media/audio/Sound Effect sci fi beep electric 2.mp3";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeToggle from "./DarkModeToggle";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [darkmodeEnabled, setDarkModeEnabled] = useState<boolean>(false);

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
    <header className={darkmodeEnabled ? "dark" : ""}>
      <div className="dark:bg-black py-3">
        <nav>
          <ul className="flex uppercase items-center justify-between tracking-wide dark:text-blue-600">
            <h3 className="uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-Galacticagrid font-bold text-3xl">
              Galactaneon
            </h3>
            <button
              onClick={navClick}
              // onMouseEnter={onHover}
              // onMouseOver={onStop}
            >
              <NavLink to={"/"}>
                <li className="font-androidAssassin font-semibold text-xl dark:hover:text-pink-600">
                  home
                </li>
              </NavLink>
            </button>
            <button onClick={navClick}>
              <NavLink to={"/about"}>
                <li className="font-androidAssassin font-semibold text-xl dark:hover:text-pink-600">
                  about
                </li>
              </NavLink>
            </button>
            <button onClick={navClick}>
              <NavLink to={"/cosplay"}>
                <li className="font-androidAssassin font-semibold text-xl dark:hover:text-pink-600">
                  cosplay
                </li>
              </NavLink>
            </button>
            <button onClick={navClick}>
              <NavLink to={"/events"}>
                <li className="font-androidAssassin font-semibold text-xl dark:hover:text-pink-600">
                  Events
                </li>
              </NavLink>
            </button>

            <button onClick={navClick}>
              <NavLink to={"/gettickets"}>
                <li className="font-androidAssassin font-semibold text-xl dark:hover:text-pink-600">
                  Get tickets
                </li>
              </NavLink>
            </button>
            <ul className="flex">
              <li>
                <DarkModeToggle
                  darkMode={darkmodeEnabled}
                  setDarkMode={setDarkModeEnabled}
                />
              </li>
              <li>
                <button className="mx-2">
                  {" "}
                  <LoginIcon />
                  Login
                </button>
              </li>
              <li>
                <button className="mx-2">Sign up</button>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
