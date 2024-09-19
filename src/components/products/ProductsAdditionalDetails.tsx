"use client"
import Image from 'next/image';
import { Description, Review } from '@/types';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import ReviewForm from '../forms/ReviewForm';

interface ProductsAdditionalDetailsProps {
    reviews: Review[],
    description: Description[],
}

const ProductsAdditionalDetails: React.FC<ProductsAdditionalDetailsProps> = ({ reviews, description }) => {
    console.log({ reviews, description })
    const [tabs, setTabs] = useState<string>("description");
    return (
        <div className=' py-10'>
            <div className=' min-w-full flex flex-row gap-8 md:gap-16 bg-slate-200 justify-center items-center text-xl font-bold py-3 rounded-md'>
                <button onClick={() => setTabs("description")} className={`${tabs === "description" && "text-[#33101C]"}`}>Add to card</button>
                <button onClick={() => setTabs("review")} className={`${tabs === "review" && "text-[#33101C]"}`}>Review</button>
            </div>
            {tabs === "review" ? (
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div >
                        <h1 className=' py-4 font-xl font-bold'>1 REVIEWS</h1>
                        <div className=' rounded-md'>
                            <div className=' flex flex-row justify-center items-start gap-4 border p-4 rounded-sm'>
                                <Image src="/images/p1.jpg" width={50} height={50} alt="hello" className='rounded-full' />
                                <div className=' flex flex-col gap-2'>
                                    <h1 className='text-md font-semibold'>Sariot Hossain</h1>
                                    <div className=' flex flex-row gap-2'>
                                        <FaStar size={22} className=' text-orange-500' />
                                        <FaStar size={22} className=' text-orange-500' />
                                        <FaStar size={22} className=' text-orange-500' />
                                    </div>
                                    <p className=' text-sm font-medium italic'>10:30 AM</p>
                                    <p>Milk Chocolate (sugar, cocoa butter, cocoa mass, skim milk powder, butteroil, lecithin as emulsifier (soy), vanillin: an artificial flavor), hazelnuts, sugar, palm oil,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className=' py-4 font-xl font-bold'>WRITE YOUR REVIEW</h1>
                        <ReviewForm/>
                    </div>
                </div>
            ) : (
                <div>
                    {
                        description && description?.map((item, index) => (
                            <div key={index} className=' flex flex-col gap-2 py-4'>
                                <h1 className=' text-lg font-semibold'>{item.title}</h1>
                                <p className='text-sm font-normal'>{item.pera}</p>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default ProductsAdditionalDetails