import React, { useState } from "react";
import { projects } from "../../data";
import ProjectCard from "../ProjectCard/ProjectCard";
import Reveal from "../Reveal/Reveal";

function Projects({ label }) {
  return (
    <div className={'flex flex-wrap gap-6 h-full overflow-scroll no-scrollbar'}>
      {projects.map((project, index) => (
        <Reveal delay={index/10}>
            <ProjectCard key={index} project={project} />
        </Reveal>
        
      ))}
    </div>
  );
}

export default Projects;
