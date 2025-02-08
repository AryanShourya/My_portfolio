import Navbar from './components/Navbar'
import Home from './components/Home'
import Technology from './components/Technology'
import Contact from './components/Contact'
import './App.css'
import { useState } from 'react'
import Projects from './components/Projects'
import { Copyright } from '@mui/icons-material'


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
      <div className={`size-full justify-center bg-${mode} text-${textCol}` }>
      <Navbar name="SHOURYA" mode={mode} textColor={textCol} changeTheme={changeTheme}/>
      <Home mode={mode} />
      <Technology mode={mode}/>
      <Projects/>
      <Contact mode={mode} textColor={textCol}/>
      </div>
      <footer className='justify-items-center min-h-40 w-screen place-content-center'>
        <div className={`justify-items-center items-center text-${textCol}`}>
          <Copyright/>
          Coded by Aryan Shourya,2025.</div>
      </footer>
    </>
  )
}


export default App
