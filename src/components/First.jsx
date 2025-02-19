//import React from 'react'
import PropTypes from 'prop-types'
import Home from './Home.jsx'
import Contact from './Contact'
import Technology from './Technology'
import Projects from './Projects'

export default function First(props) {
  return (
    <>
    <Home mode={props.mode} />
    <Technology mode={props.mode}/>
      
    <Projects/>
    <Contact mode={props.mode} textColor={props.textColor}/>
    </>
  )
}

First.propTypes={
    mode:PropTypes.string,
    textColor: PropTypes.string,
}
