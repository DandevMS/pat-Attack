"use client"
import Introduction from "@/components/intro/Introduction";
import { useState } from "react";


const page = () => {
    const [showIntroduction, setShowIntroduction] = useState(true);

  const handleIntroductionFinish = () => {
    setShowIntroduction(false);
  };

  return (
    <div className="app">
      {showIntroduction ? (
        <Introduction onFinish={handleIntroductionFinish} />
        // <Introduction onFinish={handleIntroductionFinish} />
      ) : (
        //  seccion del juego, componente game
        <p>Game</p>
      )}
    </div>
  );

}

export default page