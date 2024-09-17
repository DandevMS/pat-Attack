import React from 'react'
import { useRouter } from "next/navigation";

// img
import DanUser from "../../assets/DanUser.jpeg";
import WaterUser from "../../assets/WaterUser.jpeg";
import AxolotlUser from "../../assets/AxolotlUser.jpeg";
import { Card } from './Card';
import "../../app/globals.css"

function AboutComponent() {
  const route = useRouter();
  return (
    <div className="bg-black text-white  ">
        <div
          className="absolute top-12 left-12  px-4 py-2 z-50"
         
        >
          <button className="border text-white p-3" onClick={() => {
            route.push(`/`);
          }}>
            Regresar
          </button>
        </div>

        <div className="flex flex-col container mx-auto px-4 my-auto justify-center ">
          {/* Título */}
          <p className="text-2xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-16 mt-6 sm:mt-12">
            Desarrolladores
          </p>

          {/* Cartas */}

          <div className="flex flex-wrap justify-center items-center">
            {/*
            Estructura de links/icons
            Img
            Name
            LinkD: Id
            linkG
            LinkL
          */}

            <div className=" p-4">
              <Card
                Img={DanUser}
                Name="DanTech"
                linkD="600492246256844800"
                linkG="https://github.com/DandevMS"
                linkL="https://www.linkedin.com/in/danilo-macea/"
                
              />
            </div>

            <div className=" p-4">
              <Card
                Img={AxolotlUser}
                Name="Axolotl"
                linkD="670423461104975903"
                linkG="https://github.com/AxolotlJ-Dev"
                linkL="https://www.linkedin.com/in/javier-cabrales-1ba86b241/"
              />
            </div>

            <div className=" p-4">
              <Card
                Img={WaterUser}
                Name="Watercubz"
                linkD="775889013420195871"
                linkG="https://github.com/watercubz/"
                linkL="https://www.linkedin.com/in/watercubz/"
              />
            </div>
          </div>
        </div>

        <footer className="p-5 flex justify-center">
          <i>© copyright reserved to Nutriasoft</i>
        </footer>
        <footer className=" p-2 flex justify-center flex-col items-center">
          <div>
             <i>© this game was inspired by <a href="https://www.freecodecamp.org/" target="_blank">freecodecamp</a></i>
          </div>
         
          <div>
             <i>view repository <a href="https://github.com/DandevMS/pat-Attack.git" className='hover:text-violet-500'>pat-Attack</a></i>
          </div>
         
        </footer>
    </div>
  )
}

export default AboutComponent