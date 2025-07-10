import React from 'react'
import Heroabout from './Heroabout'
import Timeline from './timeline'

function About() {
  return (
    // The main container for the About page.
    // Individual sections will handle their own background colors based on the theme.
    <div className='overflow-y-auto scrollbar-hide flex flex-col items-center'>
      <Heroabout/>
      <Timeline/>
    </div>
  )
}

export default About
