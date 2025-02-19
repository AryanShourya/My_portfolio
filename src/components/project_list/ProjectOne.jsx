//import React from 'react'
import PropTypes from "prop-types"

export default function ProjectOne(props) {
  return (
    <div className={`absolute justify-items-center ${props.viewState==false?"hidden":"block"} h-screen w-screen z-100`}>

      
      <button className='bg-amber-600' onClick={props.changeViewState}>click me to close</button>
    </div>
  )
}

ProjectOne.propTypes = {
    viewState:PropTypes.bool,
    changeViewState:PropTypes.func,
}