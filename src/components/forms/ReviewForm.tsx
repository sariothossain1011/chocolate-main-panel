"use client"
import React from 'react'
import { FaStar } from "react-icons/fa6";
import Form from './Form';
import FormTextarea from './FormTextarea';
const ReviewForm = () => {
    const handleSubmit =(data:any)=>{
        console.log(data)
    }
    return (
        <Form submitHandler={handleSubmit} className=' flex flex-col gap-2 border p-4 rounded-md bg-slate-50'>
            <p className=' text-sm font-normal'>your rating</p>
            <div className=' flex flex-row gap-2'>
                <FaStar size={22} className=' text-orange-500' />
                <FaStar size={22} className=' text-orange-500' />
                <FaStar size={22} className=' text-orange-500' />
            </div>
            <FormTextarea name='comments' rows={5} label='your review' placeholder='REVIEW HERE ....' className=' border outline-none text-sm p-4 rounded-sm'/>
            <button className=' w-48 bg-blue-600 py-2 rounded-sm'>Submit</button>
        </Form>
    )
}

export default ReviewForm