import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-white navbar py-4 flex justify-center items-center gap-6 px-3 text-xs'>
            <NavLink to='/home'>
                <button className='flex justify-center items-center flex-col'>
                    <FaHome className='text-xl' />
                    <p>Home</p>
                </button>
            </NavLink>
            <NavLink to='/'>
                <button className='flex justify-center items-center flex-col'>
                    <FaNewspaper className='text-base' />
                    <p>News</p>
                </button>
            </NavLink>
            <NavLink to='/#'>
                <button className='flex justify-center items-center flex-col'>
                    <BsChatDotsFill className='text-base' />
                    <p>Chats</p>
                </button>
            </NavLink>
            <NavLink to='/#'>
                <button className='flex justify-center items-center flex-col'>
                    <IoNotifications className='text-xl' />
                    <p>Notification</p>
                </button>
            </NavLink>
            <NavLink to='/#'>
                <button className='flex justify-center items-center flex-col'>
                    <TiUserAdd className='text-2xl' />
                    <p>Profile</p>
                </button>
            </NavLink>

        </div>
    )
}

export default Navbar