import { IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ProductsProps{
    products:IProduct[]
}

const ProductCard:React.FC <ProductsProps > = (products) => {
  return (
    <>
    {
        products?.products && products?.products?.map((item,index)=>(
            <div key={index} className=' flex flex-col justify-center items-center text-center gap- p-3 border rounded-sm'>
                <Image src={item.image} alt={item.title}  className=' rounded-sm' width={300} height={200}/>
                <h2>{item.title}</h2>
                <p className=' text-blue-500'>  <span className='line-through'>৳{item.price}</span> <span>৳{item.discountPrice}</span> </p>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center'>
                    <button className=' w-full bg-purple-800 py-2 rounded-sm'>Add to card</button>
                    <Link href={`/products/${item.permaLink}`} className='w-full bg-purple-800 text-center py-2 rounded-sm'>Details</Link>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default ProductCard