import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/logo-pink.png";

import { colors } from "../data.js";
import Reveal from "./Reveal/Reveal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-currentLine text-foreground z-50`}
    >
      <div>
        <Reveal y={10}>
          <img src={Logo} alt="Image logo" style={{ width: "60px" }} />
        </Reveal>
        
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <Reveal y={10} delay={0.1}>
          <li>Home</li>
        </Reveal>
        <Reveal y={10} delay={0.15}>
          <li>About</li>
        </Reveal>
        <Reveal y={10} delay={0.2}>
          <li>Experience</li>
        </Reveal>
        <Reveal y={10} delay={0.25}>
          <li>Work</li>
        </Reveal>
        <Reveal y={10} delay={0.30}>
          <li>Contact</li>
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
        <li className="py-6 text-4xl">Home</li>
        <l className="py-6 text-4xl">About</l>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
