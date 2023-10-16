import React from "react";
import SvgBackGround from "../assets/bg.svg";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import { Icon } from "@iconify/react";
import Konami from "react-konami-code";
import smurfcatImage from "../assets/easter-egg/smurfcat.jpeg";
import smurfcatSound from "../assets/easter-egg/smurfcat.mp3";
import Reveal from "./Reveal/Reveal";
import { social_media } from "../data";
import { scrollTo } from "../utils/scrollUtils";

function Home() {
  const svgBg = {
    backgroundImage: `url(${SvgBackGround})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  const images = require.context("../assets/parallax", true);

  return (
    <div
      id="home"
      className={"w-full h-screen flex items-center justify-center"}
      style={svgBg}
    >
      <Konami action={() => new Audio(smurfcatSound).play()}>
        {<img src={smurfcatImage}></img>}
      </Konami>
      <div className={""}>
        <Atropos
          className={"atropos-header"}
          activeOffset={20}
          shadowScale={1.02}
          shadow={true}
          innerClassName={"rounded-xl"}
          highlight={true}
        >
          <img
            src={images(`./${"bg"}.png`)}
            data-atropos-offset="-1"
            className={"atropos-header-spacer"}
          ></img>
          <img src={images(`./${"bg"}.png`)} data-atropos-offset="-5"></img>
          <img src={images(`./${"4"}.png`)} data-atropos-offset="-8"></img>
          <img src={images(`./${"3"}.png`)} data-atropos-offset="-6"></img>
          <img src={images(`./${"2"}.png`)} data-atropos-offset="-4"></img>
          <img src={images(`./${"1"}.png`)} data-atropos-offset="-2"></img>
          <img src={images(`./${"0"}.png`)} data-atropos-offset="8"></img>
          <div
            className={
              "absolute h-full w-full top-5 left-0 flex items-center justify-center z-20"
            }
          >
            <div>
              <Reveal delay={.7}>
                <div className={'flex justify-center'}>
                  <h1 className={"text-green text-7xl absolute"} data-atropos-offset="5">
                    Eduardo Moratón
                  </h1>
                  <h1 className={"text-cyan text-7xl absolute"} data-atropos-offset="5.4">
                    Eduardo Moratón
                  </h1>
                  <h1 className={"text-purple text-7xl absolute"} data-atropos-offset="5.8">
                    Eduardo Moratón
                  </h1>
                  <h1 className={"text-pink text-7xl relative"} data-atropos-offset="6.2">
                    Eduardo Moratón
                  </h1>
                </div>
              </Reveal>

              <div className={"mx-auto px-2 flex justify-center"} data-atropos-offset="4">
                {social_media.map((social, index) => (
                  <Reveal delay={(index + 5) / 25}>
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
              <div className={"flex py-2 justify-center"} data-atropos-offset="6">
                <Reveal delay={0.5}>
                <button
              onClick={()=>scrollTo("contact")}
              className={
                "text-foreground group flex items-center border-2 px-6 py-1 hover:bg-pink hover:border-pink trasition .3"
              }
            >
              Contact{" "}
              <Icon
                className={"text-2xl group-hover:rotate-90 transition .3"}
                icon={"ph:arrow-right"}
              ></Icon>
            </button>
                </Reveal>
            
          </div>
            </div>
          </div>
        </Atropos>
      </div>
    </div>
  );
}

export default Home;
