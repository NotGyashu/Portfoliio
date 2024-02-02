"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(500)}
        className="Welcome-box py-[8px] px-[7px] text-xl border border-[#7976828b] bg-white"
      >
        <SparklesIcon className="text-[#757475] mr-[10px] h-5 w-5" />
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#686071] to-[#2f2836]">
          Tech stack
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Wroking with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
