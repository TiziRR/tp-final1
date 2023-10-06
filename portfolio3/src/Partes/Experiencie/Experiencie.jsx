import React from 'react';

const Experiencie = () => {
    return (
        <div className='bg-fondoCuatro w-screen space-y-7'>
            <div className='w-full h-full flex justify-center items-center flex-col text-white'>
                <h1 className='text-4xl text-white font-serif pt-8'>Mi Experiencia</h1>
                <p className='text-white font-light pt-3 text-center w-[70%]'>Breve relato sobre mi corta, fortalecedora y constante experiencia en el mundo de la programación.</p>
            </div>
            <div className='w-full h-full bg-fondoCuatro text-white pb-16'>
                <div className='flex w-full h-full flex-col space-y-14'>
                    <ul className='flex w-full flex-row justify-evenly '>
                        
                        <li className='max-md:w-full max-md:text-center w-[15%] max-md:border-none border-l-2 border-l-red-700'><p className='pl-5'><span className='text-white font-bold text-2xl'>Descubrimiento</span><br /><span className='text-left text-xs'>Dejada la carrera en Comunicación Social a mitad de año, me adentre en el mundo de la Programación en Silicom Misiones, recibiendome de los cursos de Introduccion a la Programación y el de Desarrollador FrontEnd.</span></p></li>
                        
                    </ul>
                    <ul className='flex w-full flex-row justify-evenly'>
                        <li><img src="/src/assets/flechas.png" alt="" /></li>
                        
                    </ul>
                    <ul className='flex w-full flex-row justify-evenly'>
                        <li className='max-md:w-full max-md:text-left w-[15%] max-md:border-none border-l-2 border-l-red-700'><p className='pl-5'><span className='text-white font-bold text-2xl'>Promoción</span><br /><span className='text-left text-xs'> Termino la secundaría en el Intituto Madre de la Misericordia y decidido a entrar a la Lic. en Comunicación Social. Permaneciendo allí casi 7 meses. </span></p></li>
                        <li className='max-md:w-full max-md:text-right w-[15%] max-md:border-none border-l-2 border-l-red-700'><p className='max-md:pl-0 max-md:pr-4 pl-5'><span className='text-white font-bold text-2xl'>Progreso</span><br /><span className='text-left text-xs'>Despues de haber esperado meses, retomo la programación gracias al Curso de BackEnd tambien proporcionado por Silciom Misiones en convenio con la Univerisad Tecnologica Nacional.</span></p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Experiencie }