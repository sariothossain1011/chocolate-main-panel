import React from 'react'
import p1 from "../../../public/images/p4.jpg";
import p2 from "../../../public/images/p5.jpg";
import p3 from "../../../public/images/p6.png";
import p4 from "../../../public/images/p3.jpg";
import Image from 'next/image';
import Link from 'next/link';
const CategoriesFeatureProducts = () => {
  return (
    <div className=' py-20'>
        <div className=' flex flex-row justify-center items-center '>
        <h1 className=' bg-purple-800 px-8 py-2 text-white rounded-sm'>CHOCOLATE</h1>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4'>
            <div className=' flex flex-col justify-center items-center text-center gap-4 p-3 border rounded-sm'>
                <Image src={p1} alt="hello"  width={250} height={200}/>
                <h2>ASDA Smart Price Dark Chocolate Bar 100gm</h2>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center'>
                    <button className=' w-full bg-purple-800 py-2 rounded-sm'>Add to card</button>
                    <Link href="/" className='w-full bg-purple-800 text-center py-2 rounded-sm'>Details</Link>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center text-center gap-4 p-3 border rounded-sm'>
                <Image src={p2} alt="hello"  width={250} height={200}/>
                <h2>ASDA Smart Price Dark Chocolate Bar 100gm</h2>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center'>
                    <button className=' w-full bg-purple-800 py-2 rounded-sm'>Add to card</button>
                    <Link href="/" className='w-full bg-purple-800 text-center py-2 rounded-sm'>Details</Link>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center text-center gap-4 p-3 border rounded-sm'>
                <Image src={p3} alt="hello"  width={250} height={200}/>
                <h2>ASDA Smart Price Dark Chocolate Bar 100gm</h2>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center'>
                    <button className=' w-full bg-purple-800 py-2 rounded-sm'>Add to card</button>
                    <Link href="/" className='w-full bg-purple-800 text-center py-2 rounded-sm'>Details</Link>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center text-center gap-4 p-3 border rounded-sm'>
                <Image src={p4} alt="hello"  width={250} height={200}/>
                <h2>ASDA Smart Price Dark Chocolate Bar 100gm</h2>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center'>
                    <button className=' w-full bg-purple-800 py-2 rounded-sm'>Add to card</button>
                    <Link href="/" className='w-full bg-purple-800 text-center py-2 rounded-sm'>Details</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CategoriesFeatureProducts