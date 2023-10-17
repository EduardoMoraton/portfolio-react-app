import React from "react";
import SvgBackGround from "../assets/bg3.svg";
import Reveal from "./Reveal/Reveal";
import { skillData } from "../data.js";
import Chip from "./Chip/Chip";
import TabView from "./TabView/TabView";
import WorkExperience from "./Tabs/WorkExperience";
import Projects from "./Tabs/Projects";
import Certifications from "./Tabs/Certifications";
import CodeArtDemos from "./Tabs/CodeArtDemos";

function Experience() {
  const svgBg = {
    backgroundImage: `url(${SvgBackGround})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  
  const tabs = [{name: 'Work', tab:<WorkExperience/>},{name: 'Projects', tab:<Projects/>}, {name: 'Certifications', tab:<Certifications/>}, {name: 'Demo', tab:<CodeArtDemos/>}]

  return (
    <div
      id="experience"
      className={
        "w-full h-screen text-foreground flex justify-center items-center"
      }
      style={svgBg}
    >
      <div>
        <TabView tabs={tabs}></TabView>
      </div>
    </div>
  );
}

export default Experience;
