"use client";
import { Socials } from "@/app";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
const [anchorEl, setAnchorEl] = useState<HTMLElement | SVGSVGElement | null>(
  null
);

  const handleMenuOpen = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" w-full  h-[45px] md:h-[65px] fixed top-0 shadow-lg z-[90]  cursor-pointer  bg-white  backdrop-blur-md  md-px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="  flex flex-row items-center">
          <Image
            src="/me.jpg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer rounded-full aspect-square  "
          />

          <span className=" hidden lg:flex font-bold ml-[10px]   text-[#373738] ">
            Gyashu Rahman
          </span>
        </a>

        <div className="  w-[65vw] md:w-[45vw] lg:md-[65vw] h-full flex  flex-row items-center justify-between md:mr-20 border">
          <div className="flex items-center justify-between w-full h-auto border border-[#d9d4e9e0] global-color  px-[10px] md:px-[20px] py-[5px] text-sm  md:text-lg md:py-[10px] rounded-full text-white">
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

        <div className="hidden md:flex  flex-row gap-5 cursor-pointer border">
          <LinkedInIcon htmlColor="#373738" />
          <GitHubIcon htmlColor="#373738" />
          <InstagramIcon htmlColor="#373738" />
          <EmailIcon htmlColor="#373738" />
        </div>

        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className=""
          >
            <MenuItem onClick={handleMenuClose}>
              <LinkedInIcon htmlColor="#373738" className="" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <GitHubIcon htmlColor="#373738" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <InstagramIcon htmlColor="#373738" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <EmailIcon htmlColor="#373738" />
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
