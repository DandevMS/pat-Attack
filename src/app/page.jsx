"use client"
// import Bush from "@/visuals/Bush";
import Cloud from "@/components/Cloud";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  return (
    <div className="interfaze flex items-center justify-center h-screen w-screen bg-[#030c29] ">
      <Cloud />
      <div className=" btn flex flex-col">
        <button
          className="pixel2 "
          onClick={() => {
            route.push(`Game/`);
          }}
        >
          Start
        </button>
        <button className="pixel2" onClick={() => {
          route.push(`About/`);
        }}  >About</button>
      </div>
    </div>
  );
}
