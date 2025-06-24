import React from 'react'
import Heroabout from './Heroabout'
import Timeline from './timeline'

function About() {
  return (
    <div className='overflow-y-auto scrollbar-hide flex flex-col items-center'>
      <Heroabout/>
      <Timeline/>
    </div>
  )
}

export default About
