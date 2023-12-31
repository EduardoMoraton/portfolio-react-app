// Navbar.js
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/logo-pink.png";
import { colors } from "../data.js";
import Reveal from "./Reveal/Reveal";
import { scrollTo } from "../utils/scrollUtils";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-currentLineBackDrop text-foreground  z-50 backdrop-blur-xl`}
    >
      <div>
        <Reveal y={10}>
          <img src={Logo} alt="Image logo" style={{ width: "60px" }} />
        </Reveal>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-2 cursor-pointer">
        <Reveal y={10} delay={0.1}>
        <a onClick={()=>{scrollTo("home")}} >Home</a>
        </Reveal>
        <Reveal y={10} delay={0.15}>
        <a onClick={()=>{scrollTo("about")}}>About</a>
        </Reveal>
        <Reveal y={10} delay={0.2}>
        <a onClick={()=>{scrollTo("experience")}}>Experience</a>
        </Reveal>
        <Reveal y={10} delay={0.25}>
        <a onClick={()=>{scrollTo("blog")}}>Blog</a>
        </Reveal>
        <Reveal y={10} delay={0.30}>
        <a href="#contact" smooth={true} duration={500}>Contact</a>
        </Reveal>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <Icon
            icon={"ci:hamburger-md"}
            className={"hover:text-pink transition .3s text-5xl"}
          />
        ) : (
          <Icon
            icon={"maki:cross"}
            className={"hover:text-pink transition .3s text-5xl"}
          />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-currentLine flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a to="home" smooth={true} duration={500}>Home</a>
        </li>
        <li className="py-6 text-4xl">
        <a to="home" smooth={true} duration={500}/>
        </li>
        <li className="py-6 text-4xl">
        <a to="home" smooth={true} duration={500}/>
        </li>
        <li className="py-6 text-4xl">
        <a to="home" smooth={true} duration={500}/>
        </li>
        <li className="py-6 text-4xl">
        <a to="home" smooth={true} duration={500}/>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
