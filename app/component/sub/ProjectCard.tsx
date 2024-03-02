import { slideInFromLeft, slideInFromTop } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  children?: React.ReactNode;
  index: number;
  activeIndex: number;
  src: string;
  title: string;
  description: string;
  setAuto: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectCard = ({
  children,
  index,
  activeIndex,
  src,
  title,
  description,
  setAuto,
}: Props) => {
  const zOffset = Math.abs(index - activeIndex);
  const zIndex = 100 - zOffset; //
  const offset = (index - activeIndex) / 6;
  const direction = Math.sign(index - activeIndex);
  const obsOffset = Math.abs(offset);

  const cssTransformProperties = `
  rotateY(calc( ${offset}*85deg)) 
  scaleY(Calc(1 + ${obsOffset} * -0.5))
  translateX(Calc( ${direction} * -6rem))
  translateZ(Calc(${obsOffset} * -40rem))`;

  const cssOpacity = `
  ${Math.abs(index - activeIndex) >= 3 ? "0" : "1"}
  `;
  const cssDisplay = `
  ${Math.abs(index - activeIndex) >= 3 ? "none" : "block"}
  `;
  const [desc,setDesc] = useState(false)
  return (
    <motion.div
      className={`absolute top-[10%] left-[24%]  w-[55%] h-[55%] cursor-pointer overflow-hidden rounded-[3rem]  border-[#373738] drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-[1s] bg-white border `}
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: zIndex,
      }}
      onMouseEnter={() => {
        setDesc(true);
        setAuto(false);
      }}
      onMouseLeave={() => {
        setDesc(false);
        setAuto(true);
      }}
    >
      <Image
        src={src}
        alt={title}
        width={655}
        height={650}
        className={` ${desc ? "blur-sm" : ""}`}
      />

      {desc && (
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="absolute top-[10%] left-[24%] w-[55%] h-[55%] flex flex-col justify-center items-center "
        >
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
