"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import TextEffect from "./texteffect";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row global-color items-center justify-center px-20 mt-40 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-1 border px-[7px] border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-lg ">Contact Me</h1>
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span> Hii There, I m Gyashu</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
            A <TextEffect />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          Enthusiastic and skilled full-stack developer, eager to apply my
          knowledge and passion for coding in a professional setting. Proficient
          in C, C++, and have a foundational understanding of JavaScript, with a
          growing familiarity with Python. Adaptable and quick learner, excited
          to take on new challenges and contribute effectively to a dynamic
          team. Ready to dive into real-world projects and grow professionally
          in the field.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 border bg-gradient-to-r from-[#4d4950] to-[#3a343f] border-white  text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contact me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
