import React, { useEffect, useState } from "react";
import SvgBackGround from "../assets/bg4.svg";
import { blog } from "../data";
import { Button } from "react-scroll";
import BlogItem from "./FullBlog/BlogItem";
import Reveal from "./Reveal/Reveal";


function Blog() {
  const svgBg = {
    backgroundImage: `url(${SvgBackGround})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  const mostRecentPosts = blog
  .slice()
  .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
  .slice(0, 3);
  return (
    <div
      id="blog"
      className="w-full h-screen text-foreground flex flex-col justify-center items-center"
      style={svgBg}
    >
      <div className={"lg:w-[800px] md:w-[500px] sm:w-[300px]"}>
        <div>
          <h2 className={'text-4xl text-green'}>Blog</h2>
          <h3 className={'text-2xl text-cyan'}>Most recent posts:</h3>
        </div>
        <div className={' bg-currentLineBackDrop backdrop-blur-sm p-5 rounded-lg flex flex-col h-[600px]'}>
          {mostRecentPosts.map((post, index) => (
            <Reveal delay={index/20}>
                <BlogItem key={index} data={post} />
            </Reveal>
            
          ))}
        </div>
      </div>
      <a href="/blog" className={'m-2 hover:text-purple transition'}>Go to full blog page</a>
    </div>
  );
}

export default Blog;
