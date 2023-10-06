import React from 'react';

const Navbar = () => {
    return (
        <div className='max-md:flex  max-md:flex-col w-full'>
            {/* max-md:w-full max-md:h-fit flex justify-evenly items-center bg-fondoUno text-white h-24 text-sm */}
            <nav className='max-md:flex-col max-md:flex-wrap max-md:h-fit w-full h-24 flex items-center justify-evenly bg-fondoUno text-white text-sm'>
                <a className='w-20' href="#"><img className='w-full' src="/src/assets/anillos.png" alt="hola" /></a>
                <div className='max-md:flex-col flex justify-between'>
                    <ul className='max-md:flex-col flex text-center my-auto'>
                        <a href="#sobreMi"><li className='p-4 font-bold hover:bg-slate-600 transition delay-150 duration-300 ease-in-out' >Sobre Mi</li></a>
                        <a href="#servicio"><li className='p-4 font-bold hover:bg-slate-600 transition delay-150 duration-300 ease-in-out' >Servicio</li></a>
                        <a href="#portfolio"><li className='p-4 font-bold hover:bg-slate-600 transition delay-150 duration-300 ease-in-out' >Portafolio</li></a>
                        <a href="#contacto"><li className='p-4 font-bold hover:bg-slate-600 transition delay-150 duration-300 ease-in-out' >Contacto</li></a>
                    </ul>
                    <button className='max-md:ml-0 max-md:p-4 bg-fondoDos font-bold hover:bg-red-400 p-3 rounded '><a href="./public/CV.pdf" download={' CV '} >Descargar CV</a></button>
                </div>
            </nav>
        </div>
    )
}

export { Navbar }