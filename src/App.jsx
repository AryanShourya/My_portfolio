import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'

//import { useState } from 'react'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='size-full mt-18' >
      <Home />
      </div>
    </>
  )
}


export default App
