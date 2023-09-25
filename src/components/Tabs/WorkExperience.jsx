import React, { useState } from "react";
import { work_experience } from "../../data";
import Reveal from "../Reveal/Reveal";

function WorkExperience(label) {
  return (
    <div
      className={
        "flex flex-col rounded-l-lg h-full py-10 overflow-y-scroll no-scrollbar"
      }
    >
      {work_experience.map((work, index) => (
        <Reveal delay={index / 10}>
          <div
            key={index}
            className={
              "flex my-5 p-5 bg-currentLineBackDrop rounded-lg backdrop-blur-sm"
            }
          >
            <div className={"flex-col mx-6"}>

              <img src={work.logo} className={"w-full"}></img>


              <div>from: {work.start}</div>
              <div>to: {work.end}</div>
            </div>
            <div className={"flex-col"}>
              <div className={"flex gap-2 items-center "}>
                <div className={"text-2xl text-green"}>{work.name}</div>
                <div className={"text-1xl text-orange"}>{work.job}</div>
              </div>

              <div>{work.desc}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default WorkExperience;
