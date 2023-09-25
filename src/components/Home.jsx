import React from "react";
import SvgBackGround from "../assets/bg.svg";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import { Icon } from "@iconify/react";
import Konami from "react-konami-code";
import smurfcatImage from '../assets/easter-egg/smurfcat.jpeg'
import smurfcatSound from '../assets/easter-egg/smurfcat.mp3'


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

  const images = require.context("../assets/parallax", true);

  return (
    <div
      name="home"
      className={"w-full h-screen flex items-center justify-center"}
      style={svgBg}
    >
    <Konami action={()=>new Audio(smurfcatSound).play()}>
      {<img src={smurfcatImage}></img>}
    </Konami>
      <div className={""}>
        <Atropos
          className={"atropos-header"}
          activeOffset={20}
          shadowScale={1.02}
          shadow={true}
          innerClassName={'rounded-xl'}
          highlight={true}
        >
          <img
            src={images(`./${"bg"}.png`)}
            data-atropos-offset="-1"
            className={'atropos-header-spacer'}
          ></img>
          <img
            src={images(`./${"bg"}.png`)}
            data-atropos-offset="-5"
          ></img>
          <img
            src={images(`./${"4"}.png`)}
            data-atropos-offset="-8"
          ></img>
          <img
            src={images(`./${"3"}.png`)}
            data-atropos-offset="-6"
          ></img>
          <img
            src={images(`./${"2"}.png`)}
            data-atropos-offset="-4"
          ></img>
          <img
            src={images(`./${"1"}.png`)}
            data-atropos-offset="-2"
          ></img>
          <img
            src={images(`./${"0"}.png`)}
            data-atropos-offset="8"
          ></img>
          <div className={"atropos-div flex alighn"}
          data-atropos-offset="5">
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
        </Atropos>
      </div>
    </div>
  );
}

export default Home;
