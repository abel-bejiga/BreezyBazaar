import React from 'react'
import { logoLight, paymentLogo } from '../assets'
import { AiOutlineGithub, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram, AiOutlineUser } from "react-icons/ai";
import {BiLogoFacebook} from 'react-icons/bi'
import {BsPaypal} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {TbHelpCircle} from 'react-icons/tb'


const Footer = () => {
  return (
      <div className='bg-black flex justify-evenly items-center text-[#949494] py-20 font-titleFont'>
        <div className='grid gap-4 '>
            <img src={logoLight} alt="logo" className='w-48 h-18' />
            <p>©BreezyBazaar.com</p>
            <img src={paymentLogo} alt="logo" className='w-40' />
            <div className='flex text-lg gap-2'>
            <AiOutlineGithub />
            <AiFillYoutube />
            <BiLogoFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
            </div>
        </div>

        <div className='grid gap-2'>
            <h1 className='flex font-extrabold text-white text-xl tracking-wider '>locate us</h1>
            <p>234 8th Dr. Sacramento, CA 95820</p>
            <p>Mobile: +1 800-123-4567</p>
            <p>Phone: +1 555-123-4567</p>
            <p>e-mail: shop@breezybazaar.com</p>
        </div>

        <div className='grid gap-2'>
          <h1 className='font-extrabold text-white text-xl tracking-wider'>Profile</h1>
          <p className='flex gap-2 items-center'><AiOutlineUser/> my account</p>
          <p className='flex gap-2 items-center'><BsPaypal/> checkout</p>
          <p className='flex gap-2 items-center'><FaHome/> order tracking</p>
          <p className='flex gap-2 items-center'><TbHelpCircle/> help & support</p>
        </div>

        <div className='h-[70px] w-72 border' >
          <input type="text" placeholder='e-mail' className='bg-transparent border-b border-b-gray-600 w-full py-2 pl-2'/>
          <h1 className='text-center py-[2px] font-semibold'>Subscribe</h1>
        </div>
      </div>
  )
}

export default Footer