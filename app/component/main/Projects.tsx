"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slider } from "./swiper";

const Projects = () => {
  return (
    <div
      className="flex bg-white flex-col items-center justify-center py-5 md:py-7 lg:py-10  z-[90]"
      id="projects"
    >
      <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-semibold cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-[#413b47] to-[#2f2836]">
        My Projects
      </h1>
      <div className=" w-[90vw] h-[50vw] relative ">
        <Slider />
      </div>
    </div>
  );
};

export default Projects;
