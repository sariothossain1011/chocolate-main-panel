

"use client"
import menuData from '../../../../public/data/header.json';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaBars, FaUserLarge } from "react-icons/fa6";
import { MdOutlineShoppingBag, MdStarOutline, MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/Store';
import { MenuItem } from '@/types';

const DHeaderSearch = dynamic(() => import('./DHeaderSearch'), { ssr: false });
const MHeaderSearch = dynamic(() => import('./MHeaderSearch'), { ssr: false });

const Header = () => {
  const [isMounted, setIsMounted] = useState(false); // State to track if component has mounted
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const { wishlistCount, cartCount } = useSelector((state: RootState) => ({
    wishlistCount: state.wishlist.wishlistCount,
    cartCount: state.cart.cartCount,
  })) as {
    wishlistCount: number;
    cartCount: number;
  };

  useEffect(() => {
    setIsMounted(true); // Set mounted to true when the component has mounted
    setMenu(menuData);
  }, []);

  const toggleSubMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <>
      <header className='bg-[#33101C] text-white'>
        <div className='container flex flex-row justify-between items-center py-3'>
          <div className='relative flex flex-row items-center gap-3'>
            <FaBars size={24} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer " />
            {/* <Image src="/logo/logo.png" alt="" width={90} height={20} /> */}
            <h1 className=' text-[#f0c76e] text-xl md:text-3xl font-extrabold italic'>CHOCOLATE</h1>
            <DHeaderSearch />

            {isOpen && (
              <nav className='absolute top-[56px] left-0 z-40 bg-white text-black shadow-lg min-w-64 rounded-sm'>
                <ul className='space-y-3 pt-2'>
                  {menu.map((item) => (
                    <li key={item.title} className='relative border-b pb-2'>
                      <div className='flex justify-between items-center cursor-pointer relative px-2' onClick={() => toggleSubMenu(item.title)}>
                        <Link href={item.link}>{item.title}</Link>
                        {item.submenu.length > 0 && <MdKeyboardArrowRight size={22} />}
                      </div>

                      {activeMenu === item.title && item.submenu.length > 0 && (
                        <ul className='relative md:absolute left-0 md:left-[255px] top-3 md:top-0 border-t-2 md:border-t-none border-l-4 bg-white text-black border-l-[#f0c76e] min-w-64 rounded-sm'>
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
            {/* Conditionally render the wishlistCount and cartCount only when component is mounted */}
            <Link href="/wishlist" className='relative'>
              <MdStarOutline size={28} className=' hover:text-[#f0c76e]' />
              {isMounted && (
                <span className='flex justify-center items-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[11px] bg-[#f0c76e] text-white  '>
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className='relative'>
              <MdOutlineShoppingBag size={27}className=' hover:text-[#f0c76e]' />
              {isMounted && (
              <span className='flex justify-center items-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[11px] bg-[#f0c76e] text-white  '>
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/login">
              <FaUserLarge size={22} className=' hover:text-[#f0c76e]' />
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className='fixed inset-0 bg-black/40 z-10' onClick={() => setIsOpen(false)} />
        )}
      </header>
    
    </>
  );
};

export default Header;
