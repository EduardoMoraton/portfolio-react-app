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
  };

  return (
    <div
      name="home"
      className={
        "w-full h-screen flex items-center justify-center flex-col-reverse md:flex-row"
      }
      style={svgBg}
    >
      <div className={"mx-auto px-2 flex flex-col justify-center items-center"}>
        <Reveal delay={0}>
          <h1 className={"text-pink text-6xl"}>Eduardo Moratón</h1>
        </Reveal>

        <HotlineText className={"z-0"} />
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
        <Reveal delay={1}>
          <div className={"flex py-2"}>
            <button className={"text-foreground group flex items-center border-2 px-6 py-1 hover:bg-pink hover:border-pink trasition .3"}>
              See more{" "}
              <Icon className={"text-2xl group-hover:rotate-90 transition .3"} icon={"ph:arrow-right"}></Icon>
            </button>
          </div>
        </Reveal>
      </div>
      <div className={"mx-auto flex justify-center items-center"}>
        <Reveal delay={1}>
          <PortraitBlob image={Edu}></PortraitBlob>
        </Reveal>
      </div>
    </div>
  );
}

export default Home;
