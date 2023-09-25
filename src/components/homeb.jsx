import React from "react";
import HotlineText from "./HotlineText/HotlineText";
import SvgBackGround from "../assets/bg.svg";
import Edu from "../assets/edu.png";
import PortraitBlob from "./PortraitBlob/PortraitBlob";
import Reveal from "./Reveal/Reveal";
import { social_media } from "../data";
import { Icon } from "@iconify/react";

function Home() {
  const svgBg = {
    backgroundImage: `url(${SvgBackGround})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      name="home"
      className={
        "w-full h-screen flex justify-evenly flex-col-reverse lg:flex-row overflow-hidden"
      }
      style={svgBg}
    >
      <div
        className={
          "mx-auto flex flex-col justify-center items-center bg-yellow "
        }
      >
        <Reveal delay={0}>
          <h1 className={"text-pink md:text-6xl text-4xl sm:text-5xl"}>
            Eduardo Moratón
          </h1>
        </Reveal>
        <div className={"mx-auto px-2 flex"}>
          {social_media.map((social, index) => (
            <Reveal delay={(index + 5) / 10}>
              <Icon
                className={
                  "text-foreground text-6xl hover:text-pink transition .3"
                }
                key={index}
                icon={social.icon}
                onClick={() => {
                  window.location.href = social.link;
                }}
              ></Icon>
            </Reveal>
          ))}
        </div>
          <div className={"flex py-2"}>
            <button
              onClick={scrollToAbout}
              className={
                "text-foreground group flex items-center border-2 px-6 py-1 hover:bg-pink hover:border-pink trasition .3"
              }
            >
              See more{" "}
              <Icon
                className={"text-2xl group-hover:rotate-90 transition .3"}
                icon={"ph:arrow-right"}
              ></Icon>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Home;
