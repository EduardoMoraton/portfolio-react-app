import React, { useState } from "react"; 
import  { code_art_demo } from "../../data";
import Reveal from "../Reveal/Reveal";
function CodeArtDemos({label}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex h-full py-10">
      <div className={'flex flex-col h-full'}>
        {code_art_demo.map((demo,index)=>(
          <Reveal delay={index/20}>
              <div key={index} className={selected===index? "bg-currentLine w-[200px] cursor-pointer":" bg-bg w-[200px] cursor-pointer"} onClick={()=>setSelected(index)}>
            {demo.name}
          </div>
          </Reveal>
          
        ))}
    </div>
    <div className={'w-full h-full px-3'}>
      {selected==null?<></>:code_art_demo[selected].iframe}
    </div>
    
    </div>
    
  );
}

export default CodeArtDemos;
