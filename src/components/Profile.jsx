//import React from 'react'
import { ArrowLeftSharp } from "@mui/icons-material"
import { Link } from "react-router-dom"
export default function Profile() {
  return (
    <>
      <div className="md:max-w-[600px]">

        {/* This is the first row of the profile page */}
        <div className="mt-15 ">
            <ul className="flex justify-between pl-5 pr-5">
              <li>
              <button className="items-center p-2  border-[0.1px] border-gray-400 rounded-2xl ">
                <Link to="/"> <ArrowLeftSharp/>Back</Link></button>
              </li>
              <li>
              <button className="items-center p-2 border-[0.1px] border-gray-400 rounded-2xl ">
                <Link> Curriculum</Link></button>
              </li>
            </ul>
        </div>

        {/* The second row of the profile page . Includes the picture , name and occupation. */}
        <div className="p-5 mt-10">

          {/* Picture and details part */}
          <div className="flex">
            <img src="src\resources\pictures\Profile\profile_pic.jpg" alt="profile_pic" 
            className="h-15 w-14 rounded-full"/>
            <div>
              <h2 className="text-lg font-bold ml-2 mr-2 mb-2">Aryan Shourya</h2>
              <p className="ml-2 mr-2 mt-1 ">Front-end Developer</p>
            </div>
          </div>

          <div className="mt-10 text-lg subheading  text-left">
            <p className="indent-11">Hello! I'm Aryan Shourya, a frontend developer based in Dehradun, Uttrakhand. I
              am currently pursuing B.tech in Computer Science. You can check out my projects
              and skills below!!
            </p>
          </div>
        </div>

        {/* Project lists */}
        <div className="p-5 mt-7">
          <h2 className="uppercase font-bold text-xl">Recent projects</h2>

          <div className="mt-10">
            <div >
                {/* image */}
                <div >
                  <img src="" alt="project_img" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
