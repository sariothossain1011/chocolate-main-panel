import React from 'react'
import DFooter from './footer/DFooter'
import MFooter from './footer/MFooter'

const Footer = () => {
  return (
    <>
   <div className=' hidden md:flex'> <DFooter/></div>
 <div className=' visible md:hidden'>   <MFooter/></div>
    </>
  )
}

export default Footer