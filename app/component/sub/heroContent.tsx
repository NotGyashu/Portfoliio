"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import TextEffect from "./texteffect";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row global-color items-center justify-center px-3 lg:px-20 md:px-10 mt-32 md:mt-40 lg:mt-40 w-full z-[20] "
    >
      <div className=" h-full w-full flex flex-col gap-2 md:gap-3 lg:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className=" flex flex-col mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span> Hii There, I m Gyashu</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
            A <TextEffect />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px] "
        >
          Enthusiastic full-stack developer proficient in C, C++, JavaScript,
          and Python. Adaptable, quick learner, eager to contribute to dynamic
          teams, and ready to tackle new challenges in a professional
          environment, aiming for growth.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-1 md:py-2 border bg-gradient-to-r from-[#4d4950] to-[#3a343f] border-white  text-center text-white cursor-pointer rounded-lg max-w-[130px] md:max-w-[200px]"
        >
          Contact me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className=" hidden lg:flex w-full h-full  justify-center items-center "
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
