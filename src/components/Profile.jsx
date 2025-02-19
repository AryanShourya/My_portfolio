//import React from 'react'
import { Link } from "react-router-dom"
export default function Profile() {
  return (
    <div className="mt-60">
      This is the Profile page.
      <button className="bg-amber-200 outline-[0.1px] outline-gray-400 ml-10">
        <Link className='p-2' to="/">Home Page</Link>
      </button>
      
    </div>
  )
}
