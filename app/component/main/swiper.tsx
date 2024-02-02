import { works } from "@/app";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "../sub/ProjectCard";
import CarouselIndicator from "../sub/swiperIndicator";

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [auto,setAuto]  = useState(true)
   const [isLargeScreen, setIsLargeScreen] = useState(false);
   const [isMediumScreen, setIsMediumScreen] = useState(false);
   const [isSmallScreen, setIsSmallScreen] = useState(false);

   useEffect(() => {
     const handleResize = () => {
       setIsLargeScreen(window.innerWidth > 1000); // Adjust this threshold as needed
       setIsMediumScreen(window.innerWidth > 700); // Adjust this threshold as needed
       setIsSmallScreen(window.innerWidth > 500); // Adjust this threshold as needed
     };

     // Initial check
     handleResize();

     // Add event listener to update on resize
     window.addEventListener("resize", handleResize);

     // Remove event listener on component unmount
     return () => window.removeEventListener("resize", handleResize);
   }, []);
  // Function to handle automatic sliding

   useEffect(() => {
     const intervalId = setInterval(() => {
       if (auto) {
         setActiveIndex((prevIndex) =>
           prevIndex === works.length - 1 ? 0 : prevIndex + 1
         );
       }
     }, 3000);

     return () => clearInterval(intervalId);
   }, [auto, works.length]);

 

// Run effect only once when component mounts

  // Function to handle next button click
  const handleNextBtn = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous button click
  const handlePrevBtn = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full h-full "
      style={{
        perspective: 340,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Previous button */}
      <button
        className="absolute left-2 top-[35%] transform -translate-y-1/2 slide-btn slider-btn-left h-9 w-9  rounded-full flex border-[#373738]  items-center justify-center border-2 bg-transparent cursor-pointer z-50"
        onClick={handlePrevBtn}
        onMouseEnter={() => {
          setAuto(false);
        }}
        onMouseLeave={() => {
          setAuto(true);
        }}
      >
        <IoIosArrowBack color="#373738" />
      </button>

      {/* Project cards */}
      {works.map((work, index) => (
        <ProjectCard
          key={index}
          index={index}
          activeIndex={activeIndex}
          src={work.src}
          title={work.title}
          description={work.description}
          setAuto={setAuto}
        />
      ))}

      {/* Next button */}
      <button
        className="absolute right-2 top-[35%] transform -translate-y-1/2 slide-btn slider-btn-left h-9 w-9 bg-transparent rounded-full flex items-center justify-center border-2 border-[#373738]  cursor-pointer z-50"
        style={{ transform: "rotate(180deg)" }}
        onClick={handleNextBtn}
        onMouseEnter={() => {
          setAuto(false);
        }}
        onMouseLeave={() => {
          setAuto(true);
        }}
      >
        <IoIosArrowBack color="#373738" />
      </button>

      {/* Carousel indicator */}
      <CarouselIndicator
        activeIndex={activeIndex}
        length={works.length}
        onSetActiveIndex={setActiveIndex}
      />
    </div>
  );
};
