import React from 'react'
import Full from '../assets/full-stack.svg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>                 
                    <p className='text-teal-600 text-4xl flex items-center hover:text-black'>
                    About
                    </p>
                    
                </div> 
                 <div className='max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8'></div> 
                <div>
                    <img src={Full} alt='img' style={{width: '350px'}}  />
                </div>
                    <div className='font-serif max-w-[1000px] w-full px-4 sm:grid-cols-2 gap-8 '>
                    <h1>One of my core competencies is my proficiency in 
                    <h1 className='text-teal-600'>HTML, CSS, JavaScript and ReactJS.</h1> I have extensive experience in using these technologies to build responsive and interactive websites that deliver a seamless user experience. I also possess basic skill in various programming languages, including 
                    <h1 className='text-teal-600'> Python, C, Java, Android Studio.</h1> Additionally, I am well- versed in the use of 
                    <h1 className='text-teal-600'>Git, MySQL, PostgreSQL</h1> for collaboration and integration with development tools.</h1> 
                    </div>
                    
                
                </div>            
        </div>
    </div>
  )
}

export default About