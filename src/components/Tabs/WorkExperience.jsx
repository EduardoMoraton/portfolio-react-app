import React, { useState } from "react";
import { work_experience } from "../../data";
import Reveal from "../Reveal/Reveal";

function WorkExperience(label) {
  return (
    <div className={"flex flex-col border-l-8 rounded-l-lg h-full py-10 overflow-y-scroll no-scrollbar"}>
      {work_experience.map((work, index) => (
        <Reveal delay={index / 10}>
          <div key={index} className={"flex my-5 p-5 bg-currentLineBackDrop rounded-lg backdrop-blur-sm"}>
            <div className={"mx-7 flex-col"}>
              <img src={work.logo} className={'w-10'}></img>
              <div>{work.start}</div>
              <div>to</div>
              <div>{work.end}</div>
            </div>
            <div className={"flex-col"}>
              <div className={'text-2xl text-green'}>{work.name}</div>
              <div>{work.desc}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default WorkExperience;
