import RegisterForm from '@/components/forms/RegisterForm'
import React from 'react'

const RegiterPage = () => {
  return (
    <div className=' flex  justify-center py-20 md:py-40'>
    <div className=' min-w-full md:min-w-[50%]'>
        <div className='flex flex-col gap-2 py-4'>
            <h1 className=' text-2xl font-bold uppercase'>Sign In</h1>
            <p className=' text-sm font-normal'>Insert your account information:</p>
        </div>
        <RegisterForm/>
    </div>
</div>
  )
}

export default RegiterPage