import React from "react";
import "./PortraitBlob.css";
import Goo from "gooey-react";
import { motion } from "framer-motion";

function getRandomAnimationParams() {
  const forwardX = (Math.random() * 200) - 150
  const forwardY = (Math.random() * 200) - 150
  const backwardX = -25;
  const backwardY = 50;

  return {
    x: [forwardX, backwardX, forwardX], // Randomized x values for forward and backward animations
    y: [forwardY, backwardY, forwardY], // Randomized y values for forward and backward animations
    duration: Math.random() * 10 + 1, // Random duration between 1 and 4 seconds
    ease: ["easeIn", "easeOut", "easeInOut"][Math.floor(Math.random() * 3)], // Random easing
    repeat: Infinity, // Loop infinitely
    repeatDelay: Math.random() * 1,
  };
}

function PortraitBlob({ image }) {
  const numberOfCircles = 20; // Change this to the number of circles you want

  const circleElements = [];
  for (let i = 0; i < numberOfCircles; i++) {
    const animationParams = getRandomAnimationParams();

    circleElements.push(
      <motion.div
        key={i}
        className="circle"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        initial={{x:60, y:2}}
        dragElastic={0.2}
        animate={{
          x: animationParams.x,
          y: animationParams.y,
        }}
        transition={{
          duration: animationParams.duration,
          ease: animationParams.ease,
          repeat: animationParams.repeat,
          repeatDelay: animationParams.repeatDelay,
        }}
      ></motion.div>
    );
  }

  return (
    <div className={"flex items-center justify-center w-[200px]"}>
      <div className="absolute">
        <Goo intensity="strong">{circleElements}</Goo>
      </div>
      <img className="relative md:w-[500px]" src={image} alt="profile" draggable="false" />
    </div>
  );
}

export default PortraitBlob;
