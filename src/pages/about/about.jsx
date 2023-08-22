"use client"
import React from "react";
import "../../app/globals.css";
import { useRouter } from "next/navigation";

import { Card } from "@/components/about/Card";

const Page = () => {
  const route = useRouter();
  return (
    <div className=" bg-black w-screen h-screen flex justify-center  text-white overflow-auto">  
        <main
          className="absolute top-12 left-12 border border-white px-4 py-2 z-50"
          // aun falta Hover
          onClick={() => {
            route.push(`/`);
          }}
        >
          <p>regresar</p>
        </main>

        <div className="flex flex-col container mx-auto px-4 my-auto justify-center ">
          {/* Título */}
          <p className="text-2xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-16 mt-6 sm:mt-12">Desarrolladores</p>


          {/* Cartas */}
        
          <div className="flex flex-wrap justify-center items-center">
            <div className=" p-4">
              <Card />
            </div>
            <div className=" p-4">
              <Card />
            </div>
            <div className=" p-4">
              <Card />
            </div>
          </div>
          </div>
        
      </div>
  );
};

export default Page;