//import React from 'react'
import PropTypes from "prop-types"
function Home(props) {
  return (
    <>
    <section id="home">
    <div className={`justify-items-center  text-${props.textColor}`}>
      <div className=" mt-40 items-center p-1 text-black">
        <a href="" className="bg-gradient-to-r from-purple-300 to-blue-300
                               p-2 flex rounded-full items-center
                              shadow-md transition delay-200 duration-400
                              ease-in-out hover:scale-110 hover:translate-y-1
                              outline-blue-500 outline ">
        <label>Check out my GitHub</label>
        <span className="material-symbols-outlined ml-2 mr-2">open_in_new</span>
        </a>
      </div>

      <div className="text-center mt-6 justify-items-center">
        <h2 className="text-3xl md:text-6xl font-bold">Crafting Code, <br />Creating Possibilities.</h2>
        <p className="text-xl md:text-3xl font-semibold mt-4 ml-4">Software Developer on a Mission.</p>

        <p className="text-lg md:text-xl mt-5 text-gray-400 font-semibold text-center">Hi, I’m Aryan , a <strong>software developer</strong> from Dehradun, India.
         <br /> Currently pursuing B.Tech in Computer Science, I specialize in crafting <br /> <strong>web applications</strong> , 
          exploring <strong>AI tools</strong>, and building meaningful projects.</p>

        <div className="flex justify-items-center ">
          <div >
          <img src="src\resources\pictures\ace-of-spades.png" name="my-logo" 
             itemID="my-logo" className="size-8 mt-5" />
          </div>
          <label className="text-lg font-semibold mt-5" htmlFor="my-logo">Aryan Shourya</label>
        </div>
      </div>

      <div className="text-3xl md:text-5xl font-bold mt-20 p-2 ">
        <h2>Exploring Web Development</h2>
      </div>
      <div className="justify-items-center p-4 mt-10">

        <video className="rounded-md shadow-lg" controls type="video/mp4" autoPlay width="1000 " muted>
          <source src="src\resources\vids\car-recording.mp4"/>
        </video>
      </div>

    </div>
    </section>
    </>
  )
}

export default Home

Home.propTypes={
  mode: PropTypes.string,
  textColor:PropTypes.string
}
