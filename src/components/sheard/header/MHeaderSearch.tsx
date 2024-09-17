"use client"
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import React from 'react'
import { IoSearch } from "react-icons/io5";
const MHeaderSearch = () => {
  const handleSubmit = (data:any) => {
    console.log(data)
  }
  return (
    <div className=' flex md:hidden px-2 py-1'>
      <Form submitHandler={handleSubmit} className='w-full flex flex-row gap-2 justify-center items-center  '>
        <div className=' w-[95%]'><FormInput name='search' placeholder='Search Products...' className='w-full bg-slate-200 text-black outline-none rounded-full px-4' /></div>
        <button className='w-[15%] flex justify-center bg-slate-500  py-2.5 rounded-full text-white'><IoSearch size={20} /></button>
      </Form>
    </div>
  )
}

export default MHeaderSearch