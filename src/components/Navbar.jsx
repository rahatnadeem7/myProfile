import React,{useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.webp';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff]'>
        <div>
            <img src={Logo} alt='LogoImage' style={{width: '150px'}} />
        </div>

        {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>
                <Link  to="home"  smooth={true} offset={50} duration={500}>
                 Home
                </Link>
                </li>
                <li>
                <Link  to="about"  smooth={true} offset={50} duration={500}>
                 About
                </Link>
                </li>
                <li>
                <Link  to="skills"  smooth={true} offset={50} duration={500}>
                 Skills
                </Link>
                </li>
                <li>
                <Link  to="work"  smooth={true} offset={50} duration={500}>
                 Work
                </Link>
                </li>
                <li>
                <Link  to="contact"  smooth={true} offset={50} duration={500}>
                 Contact
                </Link>
                </li>
            </ul>
        


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ? <FaBars />: <FaTimes />}
        </div>


        {/* Mobile menu */}
        <ul className={
            !nav
             ? 'hidden'
             : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-teal-600'
             }>

            <li className='py-6 tex-4xl'>
            <Link onClick={handleClick}  to="home"  smooth={true} offset={50} duration={500}>
                 Home
                </Link>
            </li>
            <li className='py-6 tex-4xl'>
            <Link onClick={handleClick}   to="about"  smooth={true} offset={50} duration={500}>
                 About
                </Link>
            </li>
            <li className='py-6 tex-4xl'>
            <Link onClick={handleClick}   to="skills"  smooth={true} offset={50} duration={500}>
                 Skills
                </Link>
            </li>
            <li className='py-6 tex-4xl'>
            <Link onClick={handleClick}   to="work"  smooth={true} offset={50} duration={500}>
                 Work
                </Link>
            </li>
            <li className='py-6 tex-4xl'>
            <Link onClick={handleClick}   to="contact"  smooth={true} offset={50} duration={500}>
                 Contact
                </Link></li>  
        </ul>
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-1' >
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  '>
                <a className='flex justify-between items-center w-full '
                 href="https://www.linkedin.com/in/rahat-nadeem-3a4649201/" >
                    Linkedin<FaLinkedin/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  '>
                <a className='flex justify-between items-center w-full '
                 href="https://github.com/rahatnadeem7" >
                    Github<FaGithub/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  '>
                <a className='flex justify-between items-center w-full '
                 href="mailto:rahattnadeem@gmail.com" >
                    Email<HiOutlineMail/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  '>
                <a className='flex justify-between items-center w-full   '
                 href="myresume.png" target="myresume.png" >
                    Resume<BsFillPersonLinesFill/>
                </a>
                </li>
            </ul>
        </div>

    </div> 
    
  )
}

export default Navbar