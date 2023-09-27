import React, { useState } from "react";
import { skillData } from "../../data";
import Chip from "../Chip/Chip";
import { Icon } from "@iconify/react";

function ProjectCard({ project }) {
  const images = require.context("../../assets/projects", true);
  return (
    <>
      <div className={"flex-col items-baseline bg-currentLine rounded-lg w-[350px] overflow-hidden"}>
        <div className={'group'}>
        <img
          src={images(`./${project.id}.png`)}
          alt={project.name}
          className={"w-[100%] rounded-lg group-hover:scale-125 object-cover transition"}
        />
        <p
          className={
            "absolute w-full top-10 left-0 text-2xl text-foreground text-center bg-currentLineBackDrop backdrop-blur-lg group-hover:opacity-0 transition"
          }
        >
          {project.name}
        </p>
        </div>
        
        <div className={"p-5"}>
          <div className={""}>{project.desc}</div>
          <div className={"flex"}>
            {project.skills.map((id, index) => (
              <Chip skill={skillData[id - 1]} />
            ))}
          </div>
          <div className={"flex  justify-evenly items-center text-4xl"}>
            <div className={' text-xl'}>
              {project.status}
            </div>
            {project.demo != null ? (
              <Icon
                icon={"ion:open-outline"}
                className={"hover:text-pink"}
                onClick={()=>window.location.href = project.demo}
              >
                Live Demo
              </Icon>
            ) : (
              <></>
            )}
            {project.github != null ? (
              <Icon icon={"mdi:github"} onClick={()=>window.location.href = project.github}></Icon>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
