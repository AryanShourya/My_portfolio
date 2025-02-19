import Navbar from './components/Navbar'
import First from './components/First'
import Profile from './components/Profile'
import './App.css'
import { useState } from 'react'
import { Copyright } from '@mui/icons-material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [mode,setmode]=useState("white");
  const [textCol,setTextCol] = useState("gray-800");
  

    const possible =["text-gray-800", "bg-white","text-neutral-300","bg-black","shadow-gray-300","text-black",
      "shadow-white","bg-slate-700","bg-gray-300","bg-[#2b2d2e]"
    ];

    const changeTheme =()=>{
       setmode(mode=="white"?"black":"white");
       setTextCol(textCol=="gray-800"?"neutral-300":"gray-800");
       
    }
  return (
    <>
      {document.body.style.backgroundColor = mode}
      <BrowserRouter>
      <div className={`relative size-full justify-center bg-${mode} text-${textCol}` }>
      <Navbar name="SHOURYA" mode={mode} textColor={textCol} changeTheme={changeTheme}/>
      <Routes>
        <Route path='/' element={<First mode={mode} textColor={textCol}/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </div>
      <footer className={`justify-items-center min-h-40 w-screen place-content-center border-t-[0.1px]
                          border-${textCol}`}>
        <div className={`justify-items-center items-center text-${textCol}`}>
          <Copyright/>
          Coded by Aryan Shourya,2025.</div>
      </footer>
      </BrowserRouter>
    </>
  )
}


export default App
