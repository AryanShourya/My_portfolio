import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types"
import { Link as ScrollLink } from "react-scroll";
import { Link as ReactLink} from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function Navbar(props) {
    const [sidebarToggle,setSidebarToggle] = useState(false);
    const sidebarClick=()=>{
        sidebarToggle==false?setSidebarToggle(true):setSidebarToggle(false);
    }
    
  return (
    <>
    <Sidebar sbClick={sidebarClick} mode={props.mode} sbToggle={sidebarToggle} textColor={props.textColor}/> 
    <nav className={`fixed  bg-${props.mode}/80 text-${props.textColor}
                     md:justify-items-center backdrop-blur-lg z-500
                     content-center min-h-15 w-screen top-1 sm:min-w-[500px] 
                     border-neutral-300 border-b-[0.3px]`}> 

        {/* This the navbar at screen width less than md               */}
      <div className="flex md:hidden justify-between">
        <ul className=" p-2 flex w-screen">
            <li >
                <ReactLink to="/" className="text-xl font-bold">{props.name}</ReactLink> 
            </li>
        </ul>
        <ul className="flex py-2 px-4 space-x-4">
            <li >
                <button onClick={props.changeTheme} 
                    className={`${props.mode =='white'?"hidden":"block"}`}>
                    <DarkModeIcon />
                </button>
                <button onClick={props.changeTheme} 
                    className={`${props.mode=="black"?"hidden":"block"}`}>
                    <LightModeIcon/>
                </button>
            </li>

            <li >
                <button onClick={sidebarClick}className={`${sidebarToggle==true?"hidden":"block"}`}>
                <span className="material-symbols-outlined">
                    menu</span>
                </button>

                <button onClick={sidebarClick} className={`${sidebarToggle==false?"hidden":"block"}`}>
                <CloseIcon/>
                </button>
            </li>
        </ul>
      </div>

      {/* Main navbar at full screen width  */}
      <div className="lg:max-w-5xl hidden md:flex bg-green  items-center
                      justify-between sm:w-screen ">
        <ul className="p-2 md:flex space-x-4 font-medium">
            <li>
               <ReactLink to="/" className="text-xl font-bold cursor-pointer">{props.name}</ReactLink> 
            </li>
            <li>
               <ScrollLink to="home" smooth="true" duration={600} offset={-80}
               className="hover:text-slate-500 cursor-pointer">Home</ScrollLink> 
            </li>
            <li>
                <ScrollLink to="tech" smooth="true" duration={600} offset={-40}
                className="hover:text-slate-500 cursor-pointer">Technologies</ScrollLink>
            </li>
            <li>
                <ScrollLink to='project' smooth="true" duration={600} offset={-60}
                className="hover:text-slate-500 cursor-pointer">
                Projects</ScrollLink>
            </li>
            <li>
                <ScrollLink to='contact' smooth="true" duration={600} offset={-75}
                 className="hover:text-slate-500 cursor-pointer">
                Contact</ScrollLink>
            </li>
            <li>
                <ReactLink to='/profile' className="hover:text-slate-500" >Profile</ReactLink>
            </li>
        </ul>

        <ul className="p-2 hidden md:flex space-x-4">
            <li>
                <button onClick={props.changeTheme} 
                    className={`${props.mode=='white'?"hidden":"block"}`}>
                    <DarkModeIcon/>
                </button>
                <button onClick={props.changeTheme} 
                    className={`${props.mode=='black'?"hidden":"block"}`}>
                    <LightModeIcon/>
                </button>
            </li>
            <li>
                <a href="https://github.com/AryanShourya" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/aryan-shourya-6934a3253" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
            </li>
            
        </ul>
      </div>
    </nav>
    </>
  );
}

Navbar.propTypes = {
    mode : PropTypes.string,
    textColor : PropTypes.string,
    name: PropTypes.string,
    changeTheme:PropTypes.func
}
