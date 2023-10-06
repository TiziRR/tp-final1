import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const refForm =useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = 'service_ityvh8v'; 
        const templateId = 'template_lftmx2n';

        const apiKey = 'XLDPr_jKfMZvnclKt';

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error))
    }

    return (
        <div className='max-md:flex-col max-md:h-fit bg-fondoUno text-white w-full flex justify-evenly items-center h-[120vh]' id='contacto'>
            <div className='max-md:pl-0 flex flex-col w-1/2 h-3/4  pl-28'>
                <div className='max-md:pt-5'>
                    <p className='max-md:text-center max-md:text-base max-md:bg-fondoDos text-5xl font-extralight font-serif'>Contactame</p>
                    <p className='max-md:text-center pt-4'>Vamos a armar algo nuevo, diferente y mas significativo. <br />O bien para hacer algo mas visual o conceptual.</p>
                </div>

                <div className='pt-7 pb-4'>
                    <div className='flex flex-row'>
                        <i className="bi bi-telephone bg-fondoDos pl-3 pt-2 w-10 h-10 rounded-full"></i>
                        <p className='pl-4 font-semibold'><span className='text-fondoCinco'>Llamame </span><br /> +12345678</p>
                    </div>
                </div>

                <div className='pt-4 pb-4'>
                    <div className='flex flex-row'>
                        <i className="bi bi-envelope bg-fondoDos pl-3 pt-2 w-10 h-10 rounded-full"></i>
                        <p className='pl-4 font-semibold'><span className='text-fondoCinco'>Email</span> <br />info@ramon.com</p>
                    </div>
                </div>

                <div className='pt-4 pb-4'>
                    <div className='flex flex-row'>
                        <i className="bi bi-geo-alt bg-fondoDos pl-3 pt-2 w-10 h-10 rounded-full"></i>
                        <p className='pl-4 font-semibold'><span className='text-fondoCinco'>Dirección </span><br />Posadas, Misiones</p>
                    </div>
                </div>
            </div>

            <div className='max-md:pr-0 flex flex-col w-1/2 h-3/4 pr-28'>
                <div className='max-md:text-center flex flex-col '>
                    <div className='max-md:text-center max-md:w-full max-md:font-medium w-1/2 flex'>
                        <p className='max-md:text-center max-md:w-full max-md:text-base max-md:bg-fondoDos text-5xl font-extralight font-serif'>Escribeme</p>
                    </div>

                    <div className='w-full pt-4'>
                        <form ref={refForm} onSubmit={handleSubmit} className='w-full flex flex-wrap gap-3' action="">
                            <div className='w-full flex gap-5'>
                                <input className='w-[49%] p-4 border-2 border-fondoCinco bg-fondoUno text-gray-500 rounded' type="text" name='name' placeholder='Nombre' required />
                                <input className='w-[49%] p-4 border-2 border-fondoCinco bg-fondoUno text-gray-500 rounded' type="text" name='email' placeholder='Email' required />
                            </div>
                            <div className='w-full flex gap-5'>
                                <input className='w-[49%] p-4 border-2 border-fondoCinco bg-fondoUno text-gray-500 rounded' type="number" name='phone' placeholder='Telefono' required />
                                <input className='w-[49%] p-4 border-2 border-fondoCinco bg-fondoUno text-gray-500 rounded' type="text" name='budget' placeholder='Presupuesto' required/>
                            </div>
                            <textarea name="message" cols="20" rows="10" placeholder='Mensaje' className='resize-none w-full pt-4 pl-4 border-2 border-fondoCinco bg-fondoUno text-gray-500 rounded' required></textarea>
                            <div className='max-md:pt-0 max-md:pb-4 max-md:w-full max-md:items-center pt-8'>
                            <button type='submit' id='button' className='bg-fondoDos rounded p-5 font-semibold w-[100%] hover:bg-red-400'>Enviar</button>
                        </div>
                        </form>
                        
                    </div>
                </div>

            </div>



        </div>
    )
}

export { Contact }