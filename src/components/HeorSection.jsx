import React from 'react'
import { LuImport } from "react-icons/lu";
import img from '../assets/profile6.jpg'
import resume from '../../public/jishan-resume.pdf'
const HeorSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <h1 className=' mt-16 overflow-hidden text-[12vw] font-semibold uppercase
        leading-none'>Najmul <br /> <span className='text-lime-300'>Hasan Jishan</span></h1>
        <div className='mt-8'>
            <a href={resume}
            target='_black'
            rel='noopener noreferrer'
            download
            className='flex items-center rounded-xl bg:lime-300 p-2 bg-lime-300  
            px-3 font-sans font-medium text-black hover:bg-lime-400'>
                <span>Resume.pdf</span>
                <LuImport  className='ml-2'/>
            </a>
            
        </div>
        <div className='w-full'>
            <img src={img} alt="" className='mt-8 w-full md:h-[400px] h-96 object-cover object-right-top'/>
        </div>
      </div>
    </div>
  )
}

export default HeorSection
