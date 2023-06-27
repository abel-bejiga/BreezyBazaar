import React, { useState } from 'react'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg" ,
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    ]
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : next => next + 1)
    }
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt="pic one" loading='priority'/>
                <img className='w-screen h-full object-cover' src={data[1]} alt="pic two"/>
                <img className='w-screen h-full object-cover' src={data[2]} alt="pic three"/>
                <img className='w-screen h-full object-cover' src={data[3]} alt="pic three"/>
            </div>
            <div className='flex absolute bottom-56 gap-8 mx-auto w-fit left-0 right-0'>
                <div onClick={prevSlide} className='border-[1px] border-gray-700 text-xl hover:bg-gray-700 justify-center hover:text-white duration-300 w-16 h-14 flex items-center hover:cursor-pointer active:bg-gray-900'>
                <BsArrowLeft/>

                </div>
                <div onClick={nextSlide} className='border-[1px] border-gray-700 text-xl hover:bg-gray-700 justify-center hover:text-white duration-300 w-16 h-14 flex items-center hover:cursor-pointer active:bg-gray-900'>
                <BsArrowRight/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner


