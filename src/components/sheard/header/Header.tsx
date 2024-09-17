// 'use client'
// import Image from 'next/image';
// import React, { useState } from 'react'
// import { FaBars, FaUserLarge } from "react-icons/fa6";
// import { MdOutlineShoppingBag, MdStarOutline,MdKeyboardArrowRight } from "react-icons/md";
// import DHeaderSearch from './DHeaderSearch';
// import MHeaderSearch from './MHeaderSearch';
// import Link from 'next/link';
// const Header = () => {
//   let [isOpen, setIsOpen] = useState(true);
//   return (
//     <>
//       <div className='  bg-slate-400'>
//         <div className='container flex flex-row justify-between items-center py-2'>
//           <div className='flex flex-row items-center gap-3'>
//             <div className=' relative'>
//             <FaBars size={24}       onClick={()=>setIsOpen(!isOpen)}/>
//               {
//                 isOpen && <div className=' absolute top-12 left-0 z-50 bg-white text-black'>
//                   heloo
//                 </div>
//               }

//             </div>
// <Image src="/logo/logo.png" alt="" width={90} height={20} />
// <DHeaderSearch />
//           </div>


// <div className='flex flex-row items-center gap-4 md:gap-6'>
//   <div className=' relative'>
//     <MdStarOutline size={26} />
//     <span className=' flex justify-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[12px] bg-black text-white '>5</span>
//   </div>
//   <div className=' relative'>
//     <MdOutlineShoppingBag size={25} />
//     <span className=' flex justify-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[12px] bg-black text-white '>2</span>
//   </div>

//   <Link href="/login"><FaUserLarge size={20} /></Link>
// </div>
//         </div>
//         {isOpen && (
//         <div
//           className='fixed inset-0 z-10 bg-black/50'
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//       </div>
//       <MHeaderSearch />
//     </>
//   )
// }

// export default Header

'use client'

import DHeaderSearch from './DHeaderSearch';
import MHeaderSearch from './MHeaderSearch';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types/index';
import menuData from '../../../../public/data/header.json'; // Import your JSON file
import { FaBars, FaUserLarge } from "react-icons/fa6";
import { MdOutlineShoppingBag, MdStarOutline, MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
const Header = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]); // TypeScript ensures correct types here
  const [isOpen, setIsOpen] = useState(false); // Control main menu visibility
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // Control which submenu is active

  // Load menu from JSON on component mount
  useEffect(() => {
    setMenu(menuData); // Here you'd fetch from the JSON file or API
  }, []);

  const toggleSubMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title); // Toggle the submenu
  };

  return (
    <>

      <header className='bg-slate-400'>
        <div className='container flex flex-row justify-between items-center py-3'>
          {/* Left Side - Main Menu */}
          <div className='relative flex flex-row items-center gap-3'>
            <FaBars size={24} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
            <Image src="/logo/logo.png" alt="" width={90} height={20} />
            <DHeaderSearch />

            {isOpen && (
              <nav className='absolute top-[56px] left-0 z-40 bg-white shadow-lg min-w-64  rounded-sm'>
                <ul className='space-y-3 pt-2'>
                  {menu.map((item) => (
                    <li key={item.title} className='relative border-b pb-2'>
                      <div
                        className='flex justify-between items-center cursor-pointer relative px-2'
                        onClick={() => toggleSubMenu(item.title)}
                      >
                        <Link href={item.link} className=''>{item.title}</Link>
                        {item.submenu.length > 0 && (
                          <MdKeyboardArrowRight size={22} />
                        )}

                      </div>
                      {activeMenu === item.title && item.submenu.length > 0 && (
                        <ul className=' relative md:absolute left-0 md:left-[255px] top-3 md:top-0 border-t-2 md:border-t-none border-l-4 border-l-gray-900 md:bg-white min-w-64   rounded-sm  '>
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title} className='px-2 py-2 border-b-2'>
                              <Link href={subItem.link}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}


                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className='flex flex-row items-center gap-4 md:gap-6'>
            <div className=' relative'>
              <MdStarOutline size={26} />
              <span className=' flex justify-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[12px] bg-black text-white '>5</span>
            </div>
            <div className=' relative'>
              <MdOutlineShoppingBag size={25} />
              <span className=' flex justify-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[12px] bg-black text-white '>2</span>
            </div>

            <Link href="/login"><FaUserLarge size={20} /></Link>
          </div>
        </div>

        {/* Close the menu if clicked outside */}
        {isOpen && (
          <div
            className='fixed inset-0 bg-black/40 z-10'
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>
      <MHeaderSearch />
    </>
  );
};

export default Header;
