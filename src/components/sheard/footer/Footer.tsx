import React from 'react'
import DFooter from './DFooter'
import MFooter from './MFooter'

const Footer = () => {
  return (
   <div className=' bg-black/85 text-white'>
     <div className=' container'>
   <div className=' hidden md:block '> <DFooter/></div>
 <div className=' block md:hidden'>   <MFooter/></div>
    </div>
   </div>
  )
}

export default Footer