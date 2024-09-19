"use client"
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import React from 'react'

const DHeaderSearch = () => {

  const handleSubmit = (data:any) => {
    console.log(data)
  }
  return (
    <div className='hidden sm:flex'>
     <Form submitHandler={handleSubmit}>
     <FormInput  name='search' placeholder='Search Products...' className=' bg-white/95 text-black min-w-80 rounded-full text-sm px-4 outline-none'/>
     </Form>
    </div>
  )
}

export default DHeaderSearch