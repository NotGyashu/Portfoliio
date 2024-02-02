import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
 
} from "react-icons/rx";
import EmailIcon from "@mui/icons-material/Email";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
const date = new Date()
const year = date.getFullYear()

  return (
    <div className="w-full h-full bg-transparent bg-[#282829]  text-gray-200 shadow-lg p-[15px] flex flex-col items-center justify-center px-2">
      <h1 className="text-3xl my-3">Thanks!!</h1>

      <div className="flex gap-3 justify-between items-center w-full">
        <ul className="flex flex-col  sm:flex-row gap-3">
          <li className="flex items-center gap-2">
            <RxLinkedinLogo className="text-2xl" />
            <span>LinkedIn</span>
          </li>
          <li className="flex items-center gap-2">
            <RxGithubLogo className="text-2xl" />
            <span>GitHub</span>
          </li>
          <li className="flex items-center gap-2">
            <RxInstagramLogo className="text-2xl" />
            <span>Instagram</span>
          </li>
          <li className="flex items-center gap-2">
            <EmailIcon className="text-2xl" />
            <span>Email</span>
          </li>
        </ul>

        <button className="border-2 rounded-lg h-8 px-3 text-md ">
          Download CV
        </button>
      </div>
      <div> &copy; {year}</div>
    </div>
  );
};

export default Footer;
