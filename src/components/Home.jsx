//import React from 'react'

function Home() {
  return (
    <>
    <div className=" justify-items-center">
      <div className=" mt-40 items-center p-1 ">
        <a href="" className="bg-gray-200 p-2 flex rounded-full items-center
                              shadow-md transition delay-700 duration-500
                              ease-in-out hover:scale-110 hover:translate-y-1">
        <label >Check out my GitHub</label>
        <span className="material-symbols-outlined ml-2 mr-2">open_in_new</span>
        </a>
      </div>

      <div className="text-center text-gray-800 mt-6 justify-items-center">
        <h2 className="text-3xl md:text-6xl font-bold">Crafting Code, <br />Creating Possibilities.</h2>
        <p className="text-xl md:text-3xl font-semibold mt-4 ml-4">Software Developer on a Mission.</p>

        <p className="text-lg md:text-xl mt-5 text-gray-400 font-semibold text-center">Hi, I’m Aryan , a <strong>software developer</strong> from Dehradun, India.
         <br /> Currently pursuing B.Tech in Computer Science, I specialize in crafting <br /> <strong>web applications</strong> , 
          exploring <strong>AI tools</strong>, and building meaningful projects.</p>

        <div className="flex justify-items-center text-gray-800">
          <img src="src\resources\svg\ace-of-spades.svg" name="my-logo" 
             itemID="my-logo" className="size-8 mt-5" />
          <label className="text-lg font-semibold mt-5" htmlFor="my-logo">Aryan Shourya</label>
        </div>
      </div>

      <div className="text-xl md:text-4xl font-bold mt-20 p-2 text-gray-800">
        <h2>Exploring Web Development</h2>
      </div>
      <div className="justify-items-center p-4 mt-4">

        <video className="rounded-md" controls type="video/mp4" autoPlay width="1000 " muted>
          <source src="src\resources\vids\car-recording.mp4"/>
        </video>
      </div>

    </div>
    </>
  )
}

export default Home
