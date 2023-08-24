"use client";
import Cloud from "@/components/home/Cloud";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  return (
    <div className="interfaze flex flex-col items-center justify-center h-screen w-screen bg-[#030c29] ">
      <Cloud />
      <p
        className="TitleH text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center z-50 text-white mb-12 md:mb-24 lg:mb-32 xl:mb-36"
        style={{
          fontFamily: "var(--font-retro)",
        }}
      >
        pat Attack
      </p>
      <div className=" btn flex flex-col">
        <button
          className="pixel2 "
          onClick={() => {
            // mandar a la ruta de juego
            route.push(`/intro/introduction`);
          }}
        >
          Start
        </button>
        <button
          className="pixel2"
          onClick={() => {
            route.push(`/about/about`);
          }}
        >
          About
        </button>
      </div>
    </div>
  );
}
