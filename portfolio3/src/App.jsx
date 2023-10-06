import { useState } from 'react'
import './App.css'
import { Navbar } from './Partes/Nabvar/Nabvar'
import { Header } from './Partes/Header/Header'
import { Portfolio } from './Partes/Portfolio/Portfolio'
import { Servicios } from './Partes/Servicios/Servicios'
import { Experiencie } from './Partes/Experiencie/Experiencie'
import { Contact } from './Partes/Contacto/Contact'
import { Redes } from './Partes/Redes/Redes'
import './index.css'


function App() {
  

  return (
    <> 
      <Navbar/>
      <Header/>
      <Servicios/>
      <Portfolio/>
      <Experiencie/>
      <Contact/>
      <Redes/>
    </>
  )
}

export default App
