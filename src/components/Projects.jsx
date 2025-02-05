//import React from 'react'
import { OpenInFull } from "@mui/icons-material"

export default function Projects() {
  return (
    <section id="project" className="mt-20 justify-items-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Recent Projects</h2>
        <p className="subheading">Check out the projects I have dedveloped. Visit my profile or my Github for more projects</p>
      </div>

        {/* this section contains the projects  */}
      <div className="mt-15">
        <ul className="block md:flex-col space-y-20">
            {/* First project  */}
            <li className="p-4 m-y-11">
                <div className="max-w-3xl justify-items-center">
                    <a href="" 
                       className="md:justify-between block md:flex outline-[0.1px] outline-gray-400 hover:outline-[0.1px]
                                  hover:outline-black rounded-lg lg:min-w-2xl sm:min-w-xl" >
                        {/* image container  */}
                        <div className="md:order-2 justify-items-center">
                            <img  className="pl-6"
                                  src="src\resources\pictures\skills\streamlit.png" alt="" />
                        </div>
                        {/* details pf project  */}
                        <div className="md:order-1 p-8">
                            <h2 className="text-2xl md:text-3xl font-bold">Project 1</h2>
                            <p className="mt-5"> Project details </p>
                            <div className="flex mt-4">
                                <img className="rounded-full z-40 h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                                <img className="rounded-full z-30 h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                                <img className="rounded-full h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                            </div>
                            <button className="mt-2 hover:scale-110 transition ">
                                <OpenInFull/>
                            </button>           
                        </div>
                    </a>
                </div>
            </li>

                {/* Project no 2 */}
            <li className="p-4 m-y-11">
                <div className="max-w-3xl justify-items-center">
                    <a href="" 
                       className="md:justify-between block md:flex outline-[0.1px] outline-gray-400 hover:outline-[0.1px]
                                  hover:outline-black rounded-lg lg:min-w-2xl sm:min-w-xl" >
                        {/* image container  */}
                        <div className="md:order-2 justify-items-center">
                            <img  className="pl-6"
                                  src="src\resources\pictures\skills\streamlit.png" alt="" />
                        </div>
                        {/* details pf project  */}
                        <div className="md:order-1 p-8">
                            <h2 className="text-2xl md:text-3xl font-bold">Project 2</h2>
                            <p className="mt-5"> Project details </p>
                            <div className="flex mt-4">
                                <img className="rounded-full z-40 h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                                <img className="rounded-full z-30 h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                                <img className="rounded-full h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                            </div>
                            <button className="mt-2 hover:scale-110 transition ">
                                <OpenInFull/>
                            </button>           
                        </div>
                    </a>
                </div>
            </li>
                
                {/* Project no 3 */}
            <li className="p-4 m-y-11">
                <div className="max-w-3xl justify-items-center">
                    <a href="" 
                       className="md:justify-between block md:flex outline-[0.1px] outline-gray-400 hover:outline-[0.1px]
                                  hover:outline-black rounded-lg min-w-[80px] lg:min-w-2xl sm:min-w-xl" >
                        {/* image container  */}
                        <div className="md:order-2 justify-items-center">
                            <img  className="pl-6"
                                  src="src\resources\pictures\skills\streamlit.png" alt="" />
                        </div>
                        {/* details pf project  */}
                        <div className="md:order-1 p-8">
                            <h2 className="text-2xl md:text-3xl font-bold">Project 3</h2>
                            <p className="mt-5"> Project details </p>
                            <div className="flex mt-4">
                                <img className="rounded-full z-40 h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                                <img className="rounded-full z-30 h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                                <img className="rounded-full h-8 w-8" 
                                            src="src\resources\pictures\skills\langchain.png" alt="" />
                            </div>
                            <button className="mt-2 hover:scale-110 transition ">
                                <OpenInFull/>
                            </button>           
                        </div>
                    </a>
                </div>
            </li>

        </ul>
      </div>
    </section>
  )
}
