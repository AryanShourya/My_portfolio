//import React from 'react'
import { Send} from "@mui/icons-material"
import { Phone } from "@mui/icons-material"
import { Mail } from "@mui/icons-material"
import { GitHub } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import PropTypes from "prop-types"

export default function Contact(props) {
  return (
    <>
    <section id="contact">
    <div className="justify-items-center">
        <div className="text-center mt-22">
            <h2 className="text-3xl md:text-5xl">
            <strong>Get in touch</strong>
            </h2>
            <p className="subheading">
                You can reach up to me through linkedIn or send me an email
            </p>
        </div>

        <div className=" m-10 md:flex space-y-5 sm:gap-5  p-5 lg:min-w-[1000px] justify-items-center ">
            
            <div className="grid md:grid-cols-2  gap-8 space-y-1 lg:min-w-2xl">
                <div className="outline p-4 outline-gray-400 ">
                    <div className="p-2 rounded-full outline h-10 w-10 items-center
                                    outline-gray-400 ">
                        <Phone/>  
                    </div >
                    <h2 className="font-bold mt-6">Whatsapp</h2>
                    <p className="text-slate-400 hover:text-blue-500 font-semibold mt-2 ">+91 7209507202</p>
                </div>

                <div className="outline container p-4 outline-gray-400 ">
                    <div className="p-2 rounded-full outline h-10 w-10 items-center
                                    outline-gray-400 ">
                        <Mail/>  
                    </div>
                    <h2 className="font-bold mt-6">Email</h2>
                    <p className="text-slate-400 hover:text-blue-500 font-semibold mt-2">aryanshourya.work@gmail.com</p>
                </div>

                <div className="outline p-4 outline-gray-400 ">
                    <div className="p-2 rounded-full outline h-10 w-10 items-center
                                    outline-gray-400 ">
                        <GitHub/>  
                    </div>
                    <h2 className="font-bold mt-6">Github</h2>
                    <a className="text-slate-400 hover:text-blue-500 font-semibold mt-2 "
                        href="https://github.com/AryanShourya" target="_blank" rel="noopener noreferrer">
                            www.github.com/AryanShourya
                        </a>
                </div>

                <div className="outline outline-gray-400  p-4">
                    <div className="p-2 rounded-full outline h-10 w-10 items-center
                                    outline-gray-400 ">
                        <LinkedIn/>  
                    </div>
                    <h2 className="font-bold mt-6">LinkedIn</h2>
                    <a  href="https://www.linkedin.com/in/aryan-shourya-6934a3253" target="_blank" rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-500 font-semibold mt-2 ">linkedIn/aryan-shourya</a>
                </div>
            </div>

            <div className="">
            <form action="" className="order-2 md:order-1 outline outline-gray-400  p-8 w-full rounded-lg">
                <div className=" flex gap-5 items-center">
                    <div className="p-2 rounded-full outline h-10 w-10 items-center
                                    outline-gray-400 ">
                        <Send className="rotate-320 "/>  
                    </div>
                    <div>
                        <p className="font-bold">Send me an email</p>
                    </div>
                </div>
                <div className={`flex flex-col gap-4 mt-5 `}>
                <input className={` rounded-lg bg-${props.mode=="white"?"gray-300":"[#2b2d2e]"}
                                     items-center h-8 px-4  placeholder:text-${props.textColor} `} 
                                     type="text" placeholder="Name"/>
                <input className={` rounded-lg bg-${props.mode=="white"?"gray-300":"[#2b2d2e]"} 
                                    items-center h-8 px-4  placeholder:text-${props.textColor} `}
                                     type="email" placeholder="Email"/>
                <textarea className={`rounded-lg bg-${props.mode=="white"?"gray-300":"[#2b2d2e]"}
                                   px-4 min-h-10 placeholder:text-${props.textColor}`} 
                                 placeholder="Message"/>
                <button  className={`rounded-md h-8 bg-${props.mode=="black"?"white":"black"}
                                    text-${props.textColor=="neutral-300"?"gray-800":"neutral-300"}`}>
                    To Send
                </button>
                </div>
            </form></div>
        </div>

    </div>
    </section>
    </>
  )
}
Contact.propTypes={
    mode:PropTypes.string,
    textColor:PropTypes.string,
}