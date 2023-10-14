import React from "react";
import { skillData } from "../../data";
import Chip from "../Chip/Chip";
import { Icon } from "@iconify/react";

function ProjectCard({ project }) {
  const images = require.context("../../assets/projects", true);
  return (
    <>
      <div
        className={
          "flex-col items-baseline bg-currentLine rounded-lg w-[350px] overflow-hidden"
        }
      >
        <div className={"group"}>
          <img
            src={images(`./${project.id}.png`)}
            alt={project.name}
            className={
              "w-[100%] rounded-lg group-hover:scale-125 object-cover transition"
            }
          />
          <p
            className={
              "absolute w-full top-10 left-0 text-2xl text-green text-center bg-currentLineBackDrop backdrop-blur-lg group-hover:opacity-0 transition"
            }
          >
            {project.name}
          </p>
        </div>

        <div className={"p-5 w-full flex flex-col justify-between"}>
          <div className={"mb-auto"}>{project.desc}</div>
          <div className={"flex my-2"}>
            {project.skills.map((id, index) => (
              <Chip skill={skillData[id-1]} />
            ))}
          </div>
          <div className={"flex items-center justify-evenly"}>
            <div className={"text-sm text text-orange"}>{project.status}</div>
            <div className={'flex text-4xl'}>
              {project.demo != null ? (
                <Icon
                  icon={"ion:open-outline"}
                  className={"hover:text-pink cursor-pointer"}
                  onClick={() => (window.location.href = project.demo)}
                >
                  Live Demo
                </Icon>
              ) : (
                <></>
              )}
              {project.github != null ? (
                <Icon
                  icon={"mdi:github"}
                  className={"hover:text-pink cursor-pointer"}
                  onClick={() => (window.location.href = project.github)}
                ></Icon>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
