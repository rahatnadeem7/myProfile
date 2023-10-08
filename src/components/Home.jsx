import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
// import Me from '../assets/Image.png';
// import Resume from '//assets/myresume.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-4xl sa:text-7xl'>Rahat Nadeem</p>
            <h2 className='text-2xl sa:text-7xl py-2 text-teal-600 font-serif'>Full Stack Developer</h2>
            <p className=' max-w-[700px] font-sans'>Currently pursuing a B.E in Computer Science And Engineering at Loyola - ICAM College of Engineering and Technology.</p>
            <div>
                
                <button   className='text-teal-600 group rounded-full border-4 px-2 py-4 my-2 flex items-center hover:text-black'>
                <Link to="work" smooth={true}>
                View Work</Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
                <div></div>
            </div>
            <div>
            {/* <img src={Me} alt='imag' style={{width: '250px'}}/> */}
            </div>
            <div className='lg:hidden'>
            <ul>
                <li className=' w-[160px] h-[60px] flex justify-between items-center   '>
                <a className='flex justify-between items-center w-full '
                 href="https://www.linkedin.com/in/rahat-nadeem-3a4649201/" >
                    <FaLinkedin/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center   '>
                <a className='flex justify-between items-center w-full '
                 href="https://github.com/rahatnadeem7" >
                    <FaGithub/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center   '>
                <a className='flex justify-between items-center w-full '
                 href="mailto:rahattnadeem@gmail.com" >
                    <HiOutlineMail/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full '
                 href='myresume.png' alt='imgg' target='myresume.png' >
                    <BsFillPersonLinesFill/>
                </a>
                </li>
            </ul>
        </div>      
        </div>
    </div>
  )
}
export default Home