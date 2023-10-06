import React from 'react';

const Header = () => {
    return (
        <div className='max-md:flex-col max-md:shrink-0 max-md:flex max-md:h-full max-md:w-full w-screen h-screen flex flex-row flex-wrap justify-around bg-fondoUno text-white pt-3' id='sobreMi'>
            <div className='max-md:w-full w-[39%]  flex flex-col justify-center items-start'>
                <div className='max-md:w-full max-md:pt-4 w-1/2 h-14'>
                    <p className='bg-fondoTres w-full h-full flex justify-center items-center'>¡Bienvenidos! Yo soy</p>
                </div>
                <h1 className='max-md:text-center max-md:w-full max-md:pt-3 text-4xl font-serif pt-1'>Tiziano Rossi Raczkoski</h1>
                <p className='max-md:text-center max-md:w-full text-base pt-1'>Junior FrontEnd Devoloper</p>
                <p className='max-md:pl-2 max-md:pr-2 max-md:text-center text-sm pt-4'>Tengo 19 años, soy Argentino y, a su vez, soy Estudiante de Programación. Me caracterizo por ser una persona empatica, estrica y responsable. Poseo la predispoción para el trabajo en equipo. </p>
            </div>
            <div className='max-md:w-full flex w-[42%]'>
                <img className='w-full h-full' src="/src/assets/fondo.png" alt="hola" />
            </div>
        </div>
    )
}

export { Header }