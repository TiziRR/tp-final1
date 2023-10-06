import React from 'react';

const Servicios = () => {
    return (
        <div className='max-md:shrink-0 max-md:flex max-md:h-full max-md:w-full max-md:p-4 bg-fondoCuatro w-screen h-48 flex justify-center items-center' id='servicio'>
        
           <div className='max-md:flex max-md:flex-wrap max-md:items-center w-full flex flex-row justify-evenly'>

            <div className='relative border-2 rounded-tr-lg border-fondoSiete border-dashed w-1/6 h-36 flex items-center justify-center'>
                <i class="max-md:p-1 max-md:left-5 bi bi-trophy bg-fondoDos absolute p-3 left-8 -top-4"></i>
                <p className='max-md:pl-0 text-white font-bold pl-9'><span className='max-md:text-sm text-5xl'>00</span><br /><span className='max-md:text-xs text-2xl'>Premios</span></p>
            </div>

            <div className=' relative border-2 rounded-tr-lg border-fondoDos w-1/6 h-36 flex items-center justify-center'>
                <i class="max-md:p-1 max-md:left-5 bi bi-people bg-fondoDos absolute p-3 left-8 -top-4"></i>
                <p className='max-md:pl-0 text-white font-bold pl-9'><span className='max-md:text-sm text-5xl'>00</span><br /><span className='max-md:text-xs text-2xl'>Clientes</span></p>
            </div>

            
            <div className=' relative border-2 rounded-tr-lg border-fondoSiete border-dashed w-1/6 h-36 flex items-center justify-center'>
                <i class="max-md:p-1 max-md:left-5 bi bi-hourglass bg-fondoDos absolute p-3 left-8 -top-4"></i>
                <p className='max-md:pl-0 text-white font-bold pl-9'> <span className='max-md:text-sm text-5xl'>+6</span><br /><span className='max-md:text-xs text-2xl'>Meses</span> <br /><span className='
                max-md:text-xs text-xl'>Experiencia</span></p>
            </div>

            <div className=' relative border-2 rounded-tr-lg border-fondoSiete border-dashed w-1/6 h-36 flex items-center justify-center'>
                <i class="max-md:p-1 max-md:left-5 bi bi-pc-display-horizontal bg-fondoDos absolute p-3 left-8 -top-4"></i>
                <p className='max-md:pl-0 text-white font-bold pl-9 '><span className='max-md:text-sm text-5xl'>2</span><br /><span className=' max-md:text-xs text-2xl'>Proyectos</span></p>
            </div>

           </div>
        </div>
    )
}

export { Servicios }