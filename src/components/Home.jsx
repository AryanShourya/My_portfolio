//import React from 'react'
import PropTypes from "prop-types"
function Home(props) {
  return (
    <>
    <section id="home">
    <div className={`justify-items-center  text-${props.textColor}`}>
      <div className=" mt-40 items-center p-1">
        <a href="https://github.com/AryanShourya" target="_blank" rel="noopener noreferrer" 
        className={`p-2 flex rounded-full items-center 
                    shadow-lg transition delay-200 duration-400
                    ease-in-out hover:scale-110 hover:translate-y-1
                    outline-blue-500 outline bg-${props.mode=="black"?"black":"slate-300"}`}>
        <label>Check out my GitHub</label>
        <span className="material-symbols-outlined ml-2 mr-2">open_in_new</span>
        </a>
      </div>

      <div className="text-center mt-6 justify-items-center">
        <h2 className="text-3xl md:text-6xl font-bold">Crafting Code, <br />Creating Possibilities.</h2>
        <p className="text-xl md:text-3xl font-semibold mt-4 ml-4">Software Developer on a Mission.</p>

        <p className="subheading">Hi, I’m Aryan , a <strong>software developer</strong> from Dehradun, India.
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
      <div className="justify-items-center p-4 mt-15">

        <video className="rounded-lg shadow-lg outline outline-gray-700" 
                          controls type="video/mp4" autoPlay width="1000 " muted>
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
