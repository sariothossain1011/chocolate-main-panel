
"use client"

import React from 'react'
import Form from './Form'
import FormInput from './FormInput'

const SusbscribeForm = () => {
  const submitHandler = async (data: any) => {
    console.log(data)
  }
  return (
    <>
        <Form submitHandler={ submitHandler} className="relative">
    <FormInput
      name="email"
      id="email"
      placeholder="Enter your email"
      type="email"
      className="rounded-md px-4  text-sm outline-none text-black border-2"
    />
    <div className="absolute top-1 right-0 text-white bg-[#132842] hover:bg-[#263d5c] rounded-r-md py-2 w-28 flex justify-center items-center">
      SubSscribe
    </div>
  </Form>
    </>

  )
}

export default SusbscribeForm









// "use client"
// import React from 'react'
// import Form from './Form';
// import FormInput from './FormInput';

// const SusbscribeForm = () => {
      
//   const submitHandler = async (data: any) => {
//     console.log("hello");
// };
//   return (
//     <Form submitHandler={ submitHandler} className="relative">
//     <FormInput
//       name="email"
//       id="email"
//       placeholder="Enter your email"
//       type="email"
//       className="rounded-full px-4 h-14 text-sm outline-none text-black border"
//     />
//     <div className="absolute top-2 right-1 bg-[#132842] hover:bg-[#263d5c] rounded-full min-w-full flex justify-center items-center">
//       Subscribe
//     </div>
//   </Form>
//   )
// }

// export default SusbscribeForm