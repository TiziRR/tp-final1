import React from 'react';
import botonCv from '/public/CV.pdf';

const Boton = () => {
    return(
        <a href={botonCv} download className="max-md:ml-0 max-md:p-4 bg-fondoDos font-bold hover:bg-red-400 p-3 rounded text-center">Descargar CV</a> 
    )
}

export { Boton }