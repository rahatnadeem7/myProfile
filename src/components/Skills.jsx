import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import react from '../assets/react.png';
import Git from '../assets/github.png';
import Python from '../assets/python.png';
import mysql from '../assets/mysql.png';
// import nodejs from '../assets/nodejs.png';
import php from '../assets/php.png';


const Skills = () => {
  return (
     <div name='skills' className='w-full h-screen text-black'>
        {/* container */}
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='sm:text-right pb-8 pl-4'>                 
                    <p className='text-teal-600 text-4xl flex items-center hover:text-black'>
                    Skills
                    </p>
                   </div> 
                   <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='  hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt='img'  />
                        <p className='my-4'> HTML</p>
                        </div>

                        <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='img'  />
                        <p className='my-4'> CSS</p>
                        </div>

                        <div className='  hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt='img'  />
                        <p className='my-4'> JavaScript</p>
                        </div>

                        <div className='  hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt='img'  />
                        <p className='my-4'> ReactJS</p>
                        </div>

                        <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Git} alt='img'  />
                        <p className='my-4'> Github</p>
                        </div>

                        <div className='  hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt='img'  />
                        <p className='my-4'> Python</p>
                        </div>

                        <div className='   hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mysql} alt='img'  />
                        <p className='my-4'> MySQL</p>
                        </div>

                        <div className='  hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={php} alt='img'  />
                        <p className='my-4'> php</p>
                        </div>

                        
                       
                        </div>
                    </div>                            
        </div>
    </div>
    
  )
}

export default Skills
