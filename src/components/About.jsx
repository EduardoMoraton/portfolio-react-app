import React from "react";
import SvgBackGround from "../assets/bg2.svg";
import Reveal from "./Reveal/Reveal";
import { skillData } from "../data.js";
import Chip from "./Chip/Chip";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function About() {
  const svgBg = {
    backgroundImage: `url(${SvgBackGround})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  console.log(skillData);

  return (
    <div
      id="about"
      className={
        "w-full h-screen text-foreground flex flex-col justify-center items-center"
      }
      style={svgBg}
    >
      <div
        className={
          "w-full h-screen text-foreground flex justify-center items-center"
        }
      >
        <div className={"flex justify-evenly md:flex-row flex-col"}>
          <div className={"w-[400px]"}>
            <Reveal delay={0.3}>
              <p className={"text-green text-4xl"}>About</p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className={"text-foreground px-auto"}>
                Soy programador Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quod accusamus porro illo! Ipsa rerum quam vel
                quod nostrum. Quas, dicta hic culpa voluptatibus obcaecati fugit
                iusto repudiandae excepturi dolore. Cupiditate!
              </p>
            </Reveal>
          </div>
          <div className={"w-[400px]"}>
            <Reveal delay={0.3}>
              <p className={"text-green text-4xl"}>Skills</p>
            </Reveal>
            <div className={"flex flex-wrap px-auto"}>
              {skillData.map((skill, index) => (
                <Reveal delay={index / 10}>
                  <Chip key={index} skill={skill}></Chip>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col justify-center items-center"}>
        <p>Experience</p>
        <motion.div
          animate={{
            y: [0,20,0],
            transition: {
              repeat: Infinity, // This will make the animation repeat infinitely
              duration: 1, // Adjust the duration as needed
              ease: 'anticipate'
            },
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Icon icon={"mdi:arrow-down-drop"} className={"text-6xl"} />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
