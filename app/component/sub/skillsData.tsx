"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="hidden xl:flex"
      >
        <Image src={src} width={width} height={height} alt="skill image" />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="hidden xl:hidden lg:flex"
      >
        <Image
          src={src}
          width={width * 0.75}
          height={height * 0.75}
          alt="skill image"
        />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="hidden lg:hidden md:flex"
      >
        <Image
          src={src}
          width={width * 0.5}
          height={height * 0.5}
          alt="skill image"
        />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className=" md:hidden "
      >
        <Image
          src={src}
          width={width * 0.25}
          height={height * 0.25}
          alt="skill image"
        />
      </motion.div>
    </div>
  );
};

export default SkillDataProvider;
