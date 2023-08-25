
import Introduction from "@/components/intro/Introduction";
import { useState } from "react";
import { useRouter } from "next/navigation";


const page = ({params}) => {
    const [showIntroduction, setShowIntroduction] = useState(true);
    const router = useRouter()

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
        router.push('/controls/controls')
      )}
    </div>
  );

}

export default page