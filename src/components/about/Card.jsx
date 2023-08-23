"use client";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const Card = ({ Img, Name, linkD, linkG, linkL }) => {
  return (
    <div className="border p-3 flex flex-col items-center max-w-[350px] h-500 max-h-[505px] mx-auto">
      <div className="flex p-4 ">
      <Image
              src={Img}
              className="max-w-full max-h-full mb-4 sm:mb-6 md:mb-7 border-2 border-white rounded-[100%] "  
              alt={Name}
            />
      </div>
      

      <h3 className="text-xl text-white text-center mb-4"> {Name} </h3>

      <div className="flex space-x-2">
        <span className="w-full h-full flex items-center justify-center">
          <a href={`https://discordapp.com/users/${linkD}`}>
            <FontAwesomeIcon
              icon={faDiscord}
              size="3x"
              className="hover:text-[#7289da]"
            />
          </a>
        </span>
        <span className="w-full h-full flex items-center justify-center">
          <a href={linkG}>
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              className="hover:text-[#5d5d5d]"
            />
          </a>
        </span>
        <span className="w-full h-full flex items-center justify-center">
          <a href={linkL}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              className="hover:text-[#0e76a8]"
            />
          </a>
        </span>
      </div>
    </div>
  );
};
