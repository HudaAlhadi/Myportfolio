import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <>
      <div className="bg-black fixed flex justify-between w-full h-20 text-xl items-center text-white">
        <div>
          <h2 className="font-signature text-5xl ml-4">Huda</h2>
        </div>
        <div className="list-none hidden md:flex">
          <li className="px-4 capitalize hover:scale-105 duration-200 cursor-pointer">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer px-4 capitalize hover:scale-105 duration-200">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="cursor-pointer px-4 capitalize hover:scale-105 duration-200">
          <ScrollLink to="portfolio" smooth={true} duration={500}>
              Portfolio
            </ScrollLink>
          </li>
          <li className="cursor-pointer px-4 capitalize hover:scale-105 duration-200">
          <ScrollLink to="experience" smooth={true} duration={500}>
             Experience
            </ScrollLink>
          </li>
        </div>
        <div onClick={toggleNav} className="bg-black md:hidden z-10 mr-4 text-4xl right-0 cursor-pointer">
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {nav &&  (
   
          <div className="flex-col  list-none items-center absolute  flex justify-center top-20 w-full bg-black">
            <li className="cursor-pointer my-7 px-4 text-2xl capitalize hover:scale-105 duration-200">
              <ScrollLink to="home" smooth={true} duration={500} onClick={toggleNav}>
                Home
              </ScrollLink>
            </li>
            <li className="  cursor-pointer my-7 px-4 text-2xl capitalize hover:scale-105 duration-200">
              <ScrollLink to="experience" smooth={true} duration={500} onClick={toggleNav}>
               My CV
              </ScrollLink>
            </li>
            <li className="cursor-pointer my-7 px-4 text-2xl capitalize hover:scale-105 duration-200">
            <ScrollLink to="portfolio" smooth={true} duration={500} onClick={toggleNav}>
            Portfolio
              </ScrollLink>
            </li>
            <li className="cursor-pointer my-7 px-4 text-2xl capitalize hover:scale-105 duration-200">
            <ScrollLink to="experience" smooth={true} duration={500} onClick={toggleNav}>
               Experience
              </ScrollLink>
            </li>
          </div>
        
        )   }
      </div>
    </>
  );
};

export default Navbar;
