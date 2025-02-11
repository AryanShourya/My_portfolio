//import React, { useState } from 'react'
import PropTypes from "prop-types";
import {Link} from "react-scroll"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



export default function Sidebar(props) {
  return (
    <>
    <div className={`fixed top-15 w-[70%] bg-${props.mode} h-full z-500 animate-fade-right animate-once 
                     ${props.sbToggle==true?"block":"hidden"} text-${props.textColor}`}>
        <div>
            <ul className="items-center ">
                <li className="sidebar-items">
                    <Link to="home" smooth="true" offset={-70} className="w-full hover:"
                        onClick={props.sbClick}>
                        <div className="items-center justify-between ml-2 flex p-2">
                            <h2>Home</h2>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </li>
                
                <li className="sidebar-items">
                    <Link onClick={props.sbClick} to="tech" smooth="true" offset={-40} className="w-full hover:">
                        <div className="items-center justify-between ml-2 flex p-2">
                            <h2>Technologies</h2>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </li>

                <li className="sidebar-items">
                    <Link onClick={props.sbClick} className="w-full hover:">
                        <div className="items-center justify-between ml-2 flex p-2">
                            <h2>Projects</h2>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </li>

                <li className="sidebar-items">
                    <Link onClick={props.sbClick} className="w-full hover:">
                        <div className="items-center justify-between ml-2 flex p-2">
                            <h2>Contact Me</h2>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </li>

                <li className="sidebar-items">
                    <Link onClick={props.sbClick} className="w-full hover:">
                        <div className="items-center justify-between ml-2 flex p-2">
                            <h2>Profile</h2>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </li>

                <li className="sidebar-items">
                    <a href="https://github.com/AryanShourya" target="_blank" rel="noopener noreferrer"
                        onClick={props.sbClick} className="w-full hover:">
                        <div className="items-center justify-between ml-2 flex p-2">
                            <div className="flex gap-3">
                            <h2>Github</h2>
                            <GitHubIcon/>
                            </div>
                            <ArrowOutwardIcon/>
                        </div>
                    </a>
                </li>

                <li className="sidebar-items border-none group">
                    <a href="https://www.linkedin.com/in/aryan-shourya-6934a3253" target="_blank" rel="noopener noreferrer"
                        onClick={props.sbClick} className="w-full hover:">
                        <div className="items-center justify-between ml-2 flex p-2">
                            <div className="flex gap-3">
                            <h2>LinkedIn</h2>
                            <LinkedInIcon className="group-hover:stroke-blue-700"/>
                            </div>
                            <ArrowOutwardIcon />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

Sidebar.propTypes={
    sbToggle:PropTypes.bool,
    mode:PropTypes.string,
    textColor:PropTypes.string,
    sbClick:PropTypes.func
}