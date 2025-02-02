//import React from 'react'
import PropTypes from "prop-types"

export default function Technology(props) {
  return (
    <>
    <section id="tech">
    <div className=" mt-28 justify-center p-1">
      <div className="items-center justify-center 
                    text-center mt-10">
        <h2 className="text-4xl md:text-6xl font-bold ">Texhnologies Skills</h2>
        <p className="mt-5 font-semibold text-gray-400 text-l md:text-xl">
          Tools and technologies I use to create solutions</p>
      </div>

      <div className="justify-items-center font-bold text-l mt-5 uppercase scale-80
                       md:scale-100">
        
        <ul className="p-4 gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
          <li>
            <div className="skills-div ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\html-5.png" className="size-12"/>
              </div>

              <div className="justify-items-center">
                <h2>html</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\css-3.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>css</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\js.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>javascript</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\python.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>Python</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\c++.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>c++</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\react.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>React.js</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\tailwind.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>Tailwind css</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\git.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>Git</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\streamlit.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>streamlit</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\langchain.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>langchain</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\mysql.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>mysql</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="skills-div  ">
              <div className={`skills-border ${props.mode=="black"?"bg-slate-700":"bg-white"}`}>
                <img src="src\resources\pictures\skills\vercel.png" className="size-12"/>
              </div>
              
              <div className="justify-items-center">
                <h2>vercel</h2>
              </div>
            </div>
          </li>
        </ul>
      
        </div>
    </div>
    </section>
    </>
  )
}

Technology.propTypes={
  mode:PropTypes.string,
}