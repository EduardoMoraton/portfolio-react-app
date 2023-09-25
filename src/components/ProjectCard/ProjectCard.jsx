import React, { useState } from "react";
import { skillData } from "../../data";
import Chip from "../Chip/Chip";
import { Icon } from "@iconify/react";

function ProjectCard({project}) {
  const images = require.context('../../assets/projects', true);
  return (
    <>
    <div className={'flex-col bg-currentLine rounded-lg w-[350px]'}>
      <div>
        <img src={images(`./${project.id}.png`)} alt={project.name} className={'w-full relative rounded-lg'}/>
        <p className={'absolute top-1 left-1'}>{project.name}</p>
      </div>
      <div className={'p-5'}>
        <div className={''}>
          {project.desc}
        </div>
        <div className={'flex'}>
          {project.skills.map((id, index)=>(
            <Chip skill={skillData[id-1]}/>
          ))}
        </div>
        <div className={'flex justify-end text-4xl'}>
          {project.demo!=null ? <Icon icon={'ion:open-outline'} className={''}>Live Demo</Icon> : <></>}
          {project.github!=null ? <Icon icon={'mdi:github'} ></Icon> : <></>}
        </div>
      </div>
    </div>
        
    </>
  );
}

export default ProjectCard;
