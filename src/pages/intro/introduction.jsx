
import Introduction from "@/components/intro/Introduction";
import { useState } from "react";
import { redirect } from "next/navigation";


const page = ({params}) => {
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
        redirect('/game')
      )}
    </div>
  );

}

export default page