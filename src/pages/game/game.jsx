import "../../app/globals.css"
import { useRouter } from "next/navigation";
export default function game() {
  const route = useRouter();


  return (
    <main className=" bg-black h-screen w-screen">
      <iframe
      src="/public_html/game.html"
      width="100%"
      height="550"
      frameBorder={0}
      title="Canvas Page"
    />
    <div className="flex justify-start items-start m-5 gap-5">
      <button className="prev-button text-white border border-white p-1 " onClick={() => {
            route.push(`/`);
          }} >
            Regresar
      </button>
          
      <button className="prev-button text-white border border-white p-1" onClick={() => {
            route.push(`/about/about`);
          }} >
            Finalizar
      </button>
    </div>
          
    </main>
  )
}
