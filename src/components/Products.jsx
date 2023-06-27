import React from 'react'
import ProductCards from './ProductCards'


const Products = ({products}) => {
  return (
    <div className="py-10">
    <div className='flex flex-col items-center gap-4'>
        <h1 className='bg-black px-12 py-2 text-white text-lg'>Shopping everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className="max-w-[700px] text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque, tempore dolor dolorum facere placeat obcaecati aut nobis est saepe incidunt sapiente laboriosam ipsam alias reiciendis voluptate labore numquam quaerat.
        </p>
    </div>
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {products.map((item) => <ProductCards key={item._id} product={item}/>)}
    </div>
    </div>
  )
}

export default Products