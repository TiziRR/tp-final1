import React from 'react';
import imgPort1 from '/src/assets/pr1.png';
import imgPort2 from '/src/assets/pr2.png';

const Portfolio = () => {
    return (
        <div className='w-screen h-full bg-fondoUno' id='portfolio'>
        
            <div className='w-full h-full'>
                <div className='max-md:flex-col max-md:pt-0 max-md:items-center max-md:justify-between flex flex-row justify-evenly pt-36'>
                    <div>
                        <h1 className='max-md:text-center text-4xl text-white font-serif pt-6'>Portfolio</h1>
                        <p className='max-md:text-center text-white font-light pt-2'>Proyectos realizados hasta ahora. <br /> Separados en tarea y proyectos personales.</p>
                    </div>
                    <div>
                        <nav>
                            <ul className='max-md:pt-4 max-md:flex-col max-md:text-center max-md:gap-2 flex'>
                                <li className='max-md:p-0 p-6 text-white font-bold cursor-pointer hover:bg-fondoDos transition delay-150 duration-300 ease-in-out'>Todo</li>
                                <li className='max-md:p-0 p-6 text-white font-bold cursor-pointer hover:bg-fondoDos transition delay-150 duration-300 ease-in-out'>Proyectos Personales</li>
                                <li className='max-md:p-0 p-6 text-white font-bold cursor-pointer hover:bg-fondoDos transition delay-150 duration-300 ease-in-out'>Tarea</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='flex w-full h-full'>
                    <ul className='w-full h-full flex flex-wrap flex-row justify-center p-10'>
                        <li className='p-3'><a href="https://first-project-tiziano.vercel.app/" target='_blank'><img className='w-80 h-80 object-cover cursor-pointer hover:-translate-y-3 transition delay-150 duration-300 ease-in-out' src={imgPort1} /></a></li>
                        <li className='p-3'><img className='w-80 h-80 object-cover cursor-pointer hover:-translate-y-3 transition delay-150 duration-300 ease-in-out' src={imgPort2} /></li>
                    </ul>
                </div>
                <div className='flex w-full h-full justify-center pb-10'>
                    <button className='justify-center bg-fondoDos font-bold hover:bg-red-400 p-5 rounded text-white'><a href="https://github.com/TiziRR" target='_blank'>Ver mas</a></button>
                </div>
            </div>
        </div>

    )
}

export { Portfolio }