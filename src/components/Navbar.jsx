import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css" ;



import contact from "./Contact";



import { BiHomeAlt, BiUser, BiClipboard } from 'react-icons/bi';
import { BsBriefcase, BsChatSquare, BsLink ,BsFill5CircleFill,BsMicrosoft } from 'react-icons/bs';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (



    
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >

<nav className=' fixed bottom-10 lg:bottom-8 w-full overflow-hidden z-50'>

{/* max-sm:block hidden  */}
<div className= 'container mx-auto pr-10 '>
  <div className="w-full  bg-black/20 h-[40px] backdrop-blur-2x1 rounded-full max-w-[410px] mx-auto px-2 pl-8 flex justify-between text-2xI text-white/50 items-center">

  <Link  
          to='/'
          className='cursor-pointer  w-[60px] h-[60px] flex items-center Justify-center'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        > <BiHomeAlt/> </Link>



    

  <ul className='w-full h-[40px] backdrop-blur-2x1 rounded-full max-w-[410px] mx-auto px-2 pl-8 flex justify-between text-2xI text-white/50 items-center'>
  {navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`${
        active === nav.id ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(nav.id)}
    >
      <a href={`#${nav.id}`}>
        {index === 0 ? (
          <BiUser />
        ) : index === 1 ? (
          <BsMicrosoft />
        ) : index === 2 ? (
          <BsChatSquare />
        ) : (
          nav.title
        )}
      </a>
    </li>
  ))}
</ul>

  </div>
      
        </div>
        </nav>

      
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          
        <img src={logo} alt='logo' className='w-9 h-9 object-contain logo-image pt-10' />

     


        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

     
      </div>
    </nav>
  );
};






export default Navbar;
