import React from 'react'

import MediAssist from '../assets/mediassist.png';
import NextJS from '../assets/nextjs.png';
import reactjsimg from '../assets/reactjsimg.png';
import vision from '../assets/vision.png';
import basicweb from '../assets/basicweb.png';
import shinyonaikaimg from '../assets/shinyonaika.png';
import codeeditor from '../assets/code-editor.png';
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen '>
        
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
                <div className='sm:text-right pb-8 pl-4'>                 
                    <p className='text-teal-600 text-4xl flex items-center hover:text-black'>
                    Projects & Work
                    </p>
                   </div> 
            {/* container */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid item */}
                <div
                style={{backgroundImage: `url(${MediAssist})`}}
                 className='shadow-lg shadow-teal-600 bg-teal-600   group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
MediAssist
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${vision})`}}
                 className='shadow-lg shadow-teal-600 bg-teal-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
Project Vision
                        </span>
                        
                        <div className='pt-8 text-center'>
                            
                            <a href='Project_Vision.pdf'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${NextJS})`}}
                 className=' shadow-lg shadow-teal-600 bg-teal-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
NextJS-Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href='https://github.com/rahatnadeem7/Nextjs-portfolio.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${reactjsimg})`}}
                 className=' shadow-lg shadow-teal-600 bg-teal-600  group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100  '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
ReactJS-Application
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href='https://github.com/rahatnadeem7/reactjs-myprofile.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${basicweb})`}}
                 className='shadow-lg shadow-teal-600 bg-teal-600  group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
Basic website
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href='https://github.com/rahatnadeem7/basic-website.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${shinyonaikaimg})`}}
                 className='shadow-lg shadow-teal-600 bg-teal-600  group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className='pt-8 text-center '>
                            
                            <a href='https://lablab.ai/event/salz21-ai-hackathon/mavericks/shinyonaika'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div
                style={{backgroundImage: `url(${codeeditor})`}}
                 className='shadow-lg shadow-teal-600 bg-teal-600  group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href='https://github.com/rahatnadeem7/code-editor.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Get Code</button>
                            </a>
                            

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            

            
     </div>
        
        </div>
    
  )
}

export default Work