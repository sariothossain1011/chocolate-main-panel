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
     <FormInput  name='search' placeholder='Search Products...' className=' bg-slate-200 text-black min-w-72 rounded-full px-4 outline-none'/>
     </Form>
    </div>
  )
}

export default DHeaderSearch