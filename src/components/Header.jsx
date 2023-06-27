import React from 'react'
import { Link } from 'react-router-dom'
import { logoDark, cartImg, userPP  } from '../assets/index'
import { useSelector } from 'react-redux'


const Header = () => {
  const productData = useSelector((state) => state.bazar.productData)
  console.log(productData)
  return (
    <div className='w-full h-24 bg-white border-b-[1px] border-b-gray-800 flex items-center justify-between px-10 font-titleFont sticky top-0 z-50'>
        <div className='grid'>
           <Link to='/'>
           <div className=''>
               <img src={logoDark} alt="logodark" className='w-48 object-cover' /> 
            </div></Link>
        </div>
        <div>

          <ul className='flex text-xl font-bold gap-8 items-center'>
            <li className='hover:underline underline-offset-2 cursor-pointer duration-300 hover:text-orange-900'>
              Home</li>
            <li className='hover:underline underline-offset-2 cursor-pointer duration-300 hover:text-orange-900'> Pages</li>
            <li className='hover:underline underline-offset-2 cursor-pointer duration-300 hover:text-orange-900'>
              Shop</li>
            <li className='hover:underline underline-offset-2 cursor-pointer duration-300 hover:text-orange-900'>
              Element</li>
            <li className='hover:underline underline-offset-2 cursor-pointer duration-300 hover:text-orange-900'>
              Blog</li>
            <li className='relative'>
              <img src={cartImg} alt="cart" className='w-9' />
              <span className='absolute flex top-[50%] left-1/2 -translate-x-1/2 -translate-y-[30%] font-titleFont text-[18px]'>{productData.length}</span>
            </li>
            <li className='hover:underline underline-offset-2 cursor-pointer duration-300 hover:text-orange-900'><img src={userPP} alt="icon" className='w-10 rounded-full border p-1'/></li>

          </ul>

        </div>
    </div>
  )
}

export default Header