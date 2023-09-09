import React from "react";
import Typewriter from "typewriter-effect";
import "./HotlineText.scss";
function HotlineText({ text }) {




  return (
    <div>
        <Typewriter
            options={{
                strings: ["React",
                "Java",
                "C#",
                "Python",
                "Machine Learning"],
                autoStart: true,
                loop: true,
                skipAddStyles: false
            }}
           
        />
    </div>
  );
}

export default HotlineText;