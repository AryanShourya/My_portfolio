//import React from 'react'
import PropTypes from "prop-types"


export default function Navbar(props) {

    
  return (
    <nav className={`fixed bg-${props.mode} text-${props.textColor}
                     md:justify-items-center 
                     content-center min-h-15 w-screen top-1 sm:min-w-[500px] 
                     border-neutral-300 border-b-1`}> 
      <div className="flex md:hidden justify-between">
        <ul className=" p-2 flex w-screen">
            <li >
                <a href="/" className="text-xl font-bold">{props.name}</a> 
            </li>
        </ul>
        <ul className="flex p-2 space-x-4">
            <li >
                <button onClick={props.changeTheme}>
                    <span className="material-symbols-outlined ">dark_mode</span>
                </button>
            </li>
            <li >
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
               <a href="" className="text-xl font-bold">{props.name}</a> 
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
                <button onClick={props.changeTheme}>
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
    </nav>
  );
}

Navbar.propTypes = {
    mode : PropTypes.string,
    textColor : PropTypes.string,
    firstelement :PropTypes.string,
    name: PropTypes.string,
    changeTheme:PropTypes.func
}
