import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <footer
      className={
        "dark bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
      }
    >
      <div className="grid grid-cols-3">
        <div>
          <h1 className="uppercase font-androidAssassin font-bold">location</h1>
          <div>
            <span></span>
          </div>
          <p>Center Of Excellence,Macoya</p>
        </div>
        <div>
          {" "}
          <h1 className="uppercase font-androidAssassin font-bold">sponsors</h1>
          <div>
            <span></span>
            <p>Burger King</p>
            <p>Coca-Cola</p>
            <p>Mario's Pizzeria</p>
          </div>
        </div>
        <div>
          {" "}
          <h1 className="uppercase font-androidAssassin font-bold">
            contact information
          </h1>
          <div>
            <span></span>
          </div>
          <p>
            <span>
              <PhoneIphoneIcon />
            </span>
            +1 (868) 735-1876
          </p>
          <p>
            <span>
              <EmailIcon />
            </span>
            galactaneon@gmail.com
          </p>
          <div className="flex">
            <div className="relative group mx-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-600 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-3 py-2 bg-green-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300">
                <WhatsAppIcon />
              </button>
            </div>
            <div className="relative group mx-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-3 py-2 bg-pink-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300">
                <InstagramIcon />
              </button>
            </div>
            <div className="relative group mx-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-3 py-2 bg-blue-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300">
                <FacebookIcon />
              </button>
            </div>
            <div className="relative group mx-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500-600 to-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-3 py-2 bg-red-500 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-white hover:animate-bounce duration-300">
                <PinterestIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
      <div>
        <span></span>
      </div>{" "}
      <p className="text-center"> &copy; 2023, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
