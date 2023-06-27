import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { productsData } from '../api/Api'

const Product = () => {
        const [details, setDetails] = useState({})
        let [baseQty, setBaseQty] = useState(1)
    const location = useLocation()
    useEffect(() => {
        setDetails(location.state.item)
    }, [])
  return (
    <div>
        <div className='max-w-screen-xl mx-auto my-10 flex gap-10 items-center'>
          <div className='w-2/5 relative'>
            <img className='w-full md:min-w-[500px] h-[550px] object-cover' src={details.image} alt="productImage" />
            <div className='absolute top-4 right-0'>
                {details.isNew && (
                <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>
                )}
            </div>
          </div>
          <div className="grid w-fit h-fit gap-12">
          <div className='w-3/5 flex flex-col justify-center gap-4'>
                <h2 className='text-5xl font-bold'>{details.title}</h2>
                <div className='flex gap-4 group-hover:translate-x-24 transition-transform'>
                <p className='line-through text-gray-500 text-3xl'>${details.oldPrice}</p>
                <p className='font-semibold text-3xl'>${details.price}</p>
         </div>
          </div>
          <div className='flex gap-2 text-3xl h-fit items-center'>
            <div className='flex'>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            </div>
            <p className=" text-gray-500 text-sm">
              (1 Customer review)  
            </p>
          </div>
          <p className=' text-gray-500 -mt-3 text-xl'>{details.description}</p>
           <div className='flex gap-4'>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                <p>Quantity</p>
                <div className='flex items-center gap-4 font-semibold'>
                <button onClick={() => setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                <span>{baseQty}</span>
                <button onClick={() => setBaseQty(baseQty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                </div>
            </div>
            <button className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
            </div>
          <p className='text-gray-500'>Category: <span className='font-medium capitalize'>{details.category}</span></p>
        </div>
        </div>
    </div>
  )
}

export default Product