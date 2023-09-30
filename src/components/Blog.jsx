import React, { useEffect, useState } from "react";
import SvgBackGround from "../assets/bg4.svg";
import { blog } from "../data";
import { Button } from "react-scroll";

function Blog() {
    const svgBg = {
        backgroundImage: `url(${SvgBackGround})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        };

  return (
    <div id="blog" className="w-full h-screen text-foreground flex flex-col justify-center items-center" style={svgBg}>
        <a href="/blog/a">AHHHH</a>
      {blog.map((post,index)=>(
        <div>
            <a href={"/blog/"+post.link}>{post.name}</a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
