"use client";
import { Socials } from "@/app";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full  h-[65px] fixed top-0 shadow-lg z-[90]  cursor-pointer  bg-white  backdrop-blur-md  px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="  flex flex-row items-center ">
          <Image
            src="/me.jpg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer rounded-full aspect-square p-[1em] "
          />

          <span className="font-bold ml-[10px]   text-[#373738]">
            Gyashu Rahman
          </span>
        </a>

        {isLargeScreen ? (
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#d9d4e9e0] global-color mr-[15px] px-[20px] py-[10px] rounded-full text-white">
              <a href="#about-me" className="cursor-pointer ">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-transparent global-color rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 cursor-pointer "
            >
              Dropdown
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 3
                  </a>
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex flex-row gap-5 cursor-pointer">
          <LinkedInIcon htmlColor="#373738" />
          <GitHubIcon htmlColor="#373738" />
          <InstagramIcon htmlColor="#373738" />
          <EmailIcon htmlColor="#373738" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
