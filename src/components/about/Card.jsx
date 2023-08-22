import Image from "next/image";
import React from "react";

export const Card = ({ Img, Name }) => {
  return (
    <div className="border p-3 flex flex-col items-center max-w-[350px] max-h-[505px] mx-auto">
      <img
        src={Img}
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px] xl:w-[350px] xl:h-[350px] mb-4 sm:mb-6 md:mb-7 border-2 border-white"
        style={{ borderRadius: "100%" }}
        alt={Name}
      />

      <h3 className="text-xl text-white text-center mb-4"> { Name} </h3>

      <div className="flex space-x-2">
        <span className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full text-white">
          D
        </span>
        <span className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full text-white">
          G
        </span>
        <span className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full text-white">
          L
        </span>
      </div>
    </div>
  );
};
