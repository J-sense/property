import React from 'react'
import { ABOUT } from '../constants'

const About = () => {
  return (
    <div id='about'>
      <h2 className='my-10  text-center text-3xl lg:text-8xl'>About me</h2>
      <div className='flex items-center justify-center'>
        <p className='m-8 max-w-6xl text-3xl lg:text-6xl'>
            {ABOUT}

        </p>

      </div>
    </div>
  )
}

export default About
