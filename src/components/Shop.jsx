import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RiLink } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { Select } from '@chakra-ui/react';
import { TbCurrencyTaka } from "react-icons/tb";
import { BsHandbagFill } from "react-icons/bs";
import Navbar from './Navbar';

function Shop() {
    const [isOpen, setIsOpen] = useState(false);

    const bagData = [
        {
            img: 'https://i.ibb.co/C02NWz2/Group-427319074.png',
            name: 'Venity Bag',
            price: 1000,

        },
        {
            img: 'https://i.ibb.co/Qc3BpLM/Group-427319075.png',
            name: 'Hand Bag',
            price: 1200,
        },
        {
            img: 'https://i.ibb.co/C02NWz2/Group-427319074.png',
            name: 'Venity Bag',
            price: 1000,

        },
        {
            img: 'https://i.ibb.co/Qc3BpLM/Group-427319075.png',
            name: 'Hand Bag',
            price: 1200,
        },
        {
            img: 'https://i.ibb.co/C02NWz2/Group-427319074.png',
            name: 'Venity Bag',
            price: 1000,

        },
        {
            img: 'https://i.ibb.co/Qc3BpLM/Group-427319075.png',
            name: 'Hand Bag',
            price: 1200,
        },
        {
            img: 'https://i.ibb.co/C02NWz2/Group-427319074.png',
            name: 'Venity Bag',
            price: 1000,

        },
        {
            img: 'https://i.ibb.co/Qc3BpLM/Group-427319075.png',
            name: 'Hand Bag',
            price: 1200,
        },
       
    ]

    const texts = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];




    return (
        <div className='container mx-auto pt-10 text-sm'>
            <div className='flex justify-between items-center px-3 '>
                <Link to='/'><button className='px-3 py-3 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'><IoIosArrowBack></IoIosArrowBack></button></Link>
                <button className='relative'><BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} />
                    {
                        isOpen &&
                        <div className='absolute z-10 -top-2 px-2 py-1 right-3'>
                            <button className='w-24 bg-white px-2 flex items-center gap-2 text-sm rounded-md py-1 shadow-[rgba(13,_38,_76,_0.19)_0px_2px_5px]'>Share <IoMdShare /></button>
                            <button className='w-24 px-2 bg-white mt-1  flex text-nowrap items-center gap-2 text-sm rounded-md py-1 shadow-[rgba(13,_38,_76,_0.19)_0px_2px_5px]'>Copy Link <span className='text-base'><RiLink /></span></button>
                        </div>
                    }
                </button>
            </div>

            <div className='w-full py-2 relative'>
                <img className='w-full' src="https://i.ibb.co/256NxwS/Subtract.png" alt="" />
                <div className='absolute w-[22%] left-[6.5%] -bottom-[60%]'>
                    <img className='w-full h-full' src="https://i.ibb.co/rFLYRgw/Group-427319377.png" alt="" />
                    <p className='text-xs text-nowrap py-1'><span className='font-bold'>33</span> Followers</p>
                </div>
            </div>

            <div className='flex justify-end  items-center px-3'>
                <div className='flex w-[70%] justify-between items-center'>
                    <div>
                        <h1 className='font-medium'><span className='text-blue-600'>#</span> 16 Max Store</h1>
                        <div className='flex items-center gap-1 text-orange-300'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <button className='py-1 px-3 rounded-md bg-red-500 text-gray-100 font-medium'>Follow</button>
                </div>
            </div>

            <div className='mt-5 flex justify-center border-[#f3f0f0] items-center gap-x-3 border-b pb-5'>
                <button className='py-1 px-3 rounded-md bg-[#469CD6] text-gray-100 '>Message</button>
                <button className='py-1 px-3 rounded-md bg-[#469CD6] text-gray-100 '>Location</button>
            </div>

            <div className='mt-3 flex justify-between items-center px-3'>
                <button className='pr-3 pl-1 text-base rounded-md flex items-center gap-1 w-[48%] py-1  border'><input className='w-full outline-none' type="text" name="" id="" />
                    <FiSearch className='text-3xl font-normal' />
                </button>
                <div className='w-[40%]'>
                    <Select className='font-semibold px-1 ' placeholder='Category'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5 container mx-auto pl-3 pr-5 mt-5'>
                {
                    bagData.map((bag, index) => {
                        return (
                            <div key={index} className='flex justify-evenly flex-col shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] shadow-[#e8eef2] rounded-md  items-center'>
                                <img className='' src={bag.img} alt="" />
                                <div className='flex justify-between items-center gap-x-6 mt-2'>
                                    <div>
                                        <h1 className='font-bold'>{bag.name}</h1>
                                        <p className='flex font-semibold items-center'><TbCurrencyTaka /> {bag.price}</p>
                                    </div>
                                    <button className='p-1 rounded-full flex justify-center items-center bg-blue-50'><BsHandbagFill/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            <div className='absolute right-1 bottom-36 text-end uppercase px-2'>
                {
                    texts.map((t,i)=> <p className='text-xs mt-[7px]' key={i}>{t}</p>)
                }
            </div>

            <div className='sticky bottom-0'>
                <Navbar/>
            </div>
        </div>
    )
}

export default Shop