import Navbar from './components/Navbar'
import Home from './components/Home'
import Technology from './components/Technology'
import './App.css'
import { useState } from 'react'
//import PropTypes from "prop-types"

//import { useState } from 'react'

function App() {
    const [mode,setmode]=useState("white");
    const [textCol,setTextCol] = useState("gray-800");
    const possible =["text-gray-800", "bg-white","text-neutral-300","bg-black","shadow-gray-300",
      "shadow-white","bg-slate-700"
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
      </div>
    </>
  )
}


export default App
