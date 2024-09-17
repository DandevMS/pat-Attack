"use client"

import "../../app/globals.css";
import { useRouter } from "next/navigation";

export default function game() {
  const route = useRouter();

  const handleReloadAndPlayAgain = () => {
    window.location.reload();
  };


  return (
    <main className=" bg-black h-screen w-screen">
      <button
        className="prev-button text-white border border-white p-1 m-5 "
        onClick={() => {
          route.push(`/`);
        }}
      >
        Regresar  
      </button>
      <button
        className="prev-button text-white border border-white p-1 m-5 "
        onClick={handleReloadAndPlayAgain}
      >
        Volver a jugar 
      </button>
      <iframe
        src="/public_html/game.html"
        width="100%"
        height="530"
        frameBorder={0}
        title="Canvas Page"
      />
    </main>
    
  );
}
