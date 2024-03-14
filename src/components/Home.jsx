import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  return (
    <div className='bg-[#ECE3CE] h-screen w-full flex justify-center items-center'>
            <Link to='/home'>
            <button className='px-8 py-1 hover:scale-105 duration-300 rounded-lg  flex items-center gap-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:bg-[#ecdab0]'>Go <FaLongArrowAltRight/></button>
            </Link>
            
    </div>
  )
}

export default Home