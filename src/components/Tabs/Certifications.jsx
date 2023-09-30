import React, { useState } from "react";
import { certs } from "../../data";
import Reveal from "../Reveal/Reveal";
import { Icon } from "@iconify/react";

function Certifications({ label }) {
  return (
    <div className={"flex flex-col py-10 w-full h-full overflow-y-scroll"}>
      {certs.map((cert, index) => (
        <Reveal delay={index/35}>
          <div className={"flex bg-currentLine rounded-lg p-3 group transition my-2"} key={index}>
            <div>
              <img src={cert.icon} className={'w-10 mr-5'}></img>
            </div>
            <div className={'cursor-pointer h-[50px] group-hover:h-[130px] overflow-y-hidden transition-all duration-200 ease'}>
              <p className={'text-green text-xl'}>{cert.name}</p>
              <p className={'text-orange text-sm'}>{cert.from}</p>
              <p className={'text-sm'}>{cert.expedition}</p>
              <p className={'text-sm'}>credential id: {cert.cert_code}</p>
              <a className={'flex items-center justify-center gap-1 border w-44 p-1 rounded-full hover:bg-foreground hover:text-currentLine mt-1 transition'} href={cert.cert_link}>Show credential <Icon icon="ion:open-outline" className={'text-xl'}></Icon></a>
            </div>
            
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Certifications;
