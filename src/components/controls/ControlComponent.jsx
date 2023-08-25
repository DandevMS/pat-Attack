"use client";
import React from 'react'
import Image from 'next/image'
import Arrow from '../../../public/arrow-keys.png'
import control_key from '../../../public/control-key.png'
import '../../app/globals.css'
import { useRouter } from "next/navigation";
function ControlComponent() {
  const router = useRouter()
  return (
    <>
    <div className='flex flex-col min-h-screen'>
    <h1>pagina de controles</h1>
    <header className='title flex justify-center items-center p-5 mt-5'>
      <div className='flex'>
        <h1 className='text-5xl text-white'>Control Game Pat Attack</h1>
      </div>
    </header>
    <main className=' w-full h-full flex justify-center items-center flex-1'>
      <div className='w-full control-image flex justify-center items-center'>
        <div className='flex flex-col text-center'>
           <p className='text-white m-2'>Puedes mover el pato con las flechas del teclado</p>
        <Image
          src={Arrow}
          alt="Picture of the author"
         className='img-control w-auto h-auto' />
        </div>
        <div className='flex flex-col'>
          <p className='text-white m-2 text-center'>con control puedes covertirte en una bola de fuego y acabar con tus enemigos</p>
          <Image
          src={control_key}
          alt="Picture of the author"
          className='img-control w-auto h-auto' />
        </div>
     
      
      </div>
    </main>

    <footer className='flex justify-between items-center p-4 absolute w-full bottom-0 '>
      <div>
        
      <button className=" border text-white p-3" onClick={() => {
            router.push(`/`);
          }}>
            Regresar
      </button>
      </div>

      // init game button
      <div>
        
      <button className=" border text-white p-3 " onClick={() => {
            router.push(`/game/game`);
          }}>
            Iniciar
          </button>
      </div>
    </footer>
    </div>
    </>
  )
}

export default ControlComponent