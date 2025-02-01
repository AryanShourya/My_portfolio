//import React from 'react'
import { useState } from "react";
export default function Navbar() {

    const [mode,setmode]=useState("white");
    const [textCol,setTextCol] = useState("black");
    
    const changeTheme=()=>{
      if(mode =="white")
      {
        setmode("#000000");
        setTextCol("White");
        
      }
      else{
        setmode("white");
        setTextCol("black");
      }
    }
  return (
    <div className={`fixed bg-white text-gray-800 
                     md:justify-items-center 
                     content-center min-h-15 w-screen top-1 sm:min-w-[500px] 
                     border-neutral-300 border-b-1`}> 
      <div className="flex md:hidden ">
        <ul className="justify-between p-2 flex w-screen">
            <li>
                <a href="/" className="text-xl font-bold">SHOURYA</a> 
            </li>
            <li>
                <button >
                <span className="material-symbols-outlined dark:fill-neutral-200">menu</span>
                </button>
            </li>
        </ul>
      </div>
      <div className="lg:max-w-5xl hidden md:flex bg-green  items-center
                      justify-between sm:w-screen ">
        <ul className="p-2 md:flex space-x-4 font-medium">
            <li>
               <a href="" className="text-xl font-bold">SHOURYA</a> 
            </li>
            <li>
                <a href="" className="hover:text-slate-500">Technologies</a>
            </li>
            <li>
                <a className="hover:text-slate-500" href="">Projects</a>
            </li>
            <li>
                <a className="hover:text-slate-500" href="">Contact</a>
            </li>
            <li>
                <a className="hover:text-slate-500" href="">Profile</a>
            </li>
        </ul>

        <ul className="p-2 flex space-x-4">
            <li>
                <button onClick={changeTheme}>
                    <span className="material-symbols-outlined ">dark_mode</span>
                </button>
            </li>
            <li>
                <a href="">
                    <img className="size-6 " src="src\resources\svg\github-142-svgrepo-com.svg"/>
                </a>
                
            </li>
            <li>
                <a href="">
                    <img src="src\resources\svg\logo-linkedin-svgrepo-com.svg" className="size-7" />
                </a>
            </li>
            
        </ul>
      </div>
    </div>
  )
}
