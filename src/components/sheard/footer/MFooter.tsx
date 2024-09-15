import Image from 'next/image'
import React from 'react'
import data from '../../../../public/data/footer/footer.json'
import Link from 'next/link'
import SusbscribeForm from '@/components/forms/SusbscribeForm';
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaTiktok,
    FaYoutube
} from "react-icons/fa6";
interface IconItem {
    icon: JSX.Element;
    link: string;
}

// SOCIAL MEDIA ICONS & LINK
const Icons: IconItem[] = [
    {
        icon: <FaFacebookF size={18} />,
        link: "",
    },
    {
        icon: <FaInstagram size={18} />,
        link: "",
    },
    {
        icon: <FaXTwitter size={18} />,
        link: "",
    },
    {
        icon: <FaTiktok size={18} />,
        link: "",
    },
    {
        icon: <FaYoutube size={18} />,
        link: "",
    },
];

const MFooter = () => {


    return (
        <div className=''>
            <div className=' grid md:grid-cols-2  gap-6 justify-center items-center text-center'>
                <div className=' flex flex-col gap-2 '>
                    <div className=' flex flex-row justify-center items-center'>
                    <Image src="/logo/logo.png" alt='logo' width={100} height={100} />
                    </div>
                    <p className=' text-[14px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
                    <SusbscribeForm />
                    <div className='flex flex-row justify-center items-center
                    '>
                    <ul className=''>
                        <li className="flex flex-row gap-2 ">
                            {Icons.map((item, index) => (
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    key={index}
                                    className="hover:bg-white hover:text-black rounded-full px-2 py-2 duration-300 ease-out"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </li>
                    </ul>
                    </div>
                </div>
                {
                    data && data.map((item, index) => (
                        <div key={index}>
                            <h1 className=' text-lg font-semibold'>{item.mainTitle}</h1>
                            {
                                item?.items.map((subItems, index) => (
                                    <ul key={index}>
                                        <li className=' text-[14px] font-normal py-1'><Link href={subItems.path}>{subItems.title}</Link></li>

                                    </ul>
                                ))
                            }
                        </div>
                    ))
                }
                <div className=' flex flex-col gap-2 text-[14px] font-normal justify-center items-center text-center'>
                    <h1 className=' text-lg font-semibold'>STORE INFORMATION</h1>
                    <p className=' flex flex-row justify-center items-center gap-1'><MdLocationOn size={18} /> <span>Road:03, Block:B, Niketon, Gulshan-1, Dhaka</span></p>
                    <p className=' flex flex-row items-center gap-1'> <MdCall size={18} /> <Link href="">+880 1971 971 520</Link></p>
                    <p className=' flex flex-row items-center gap-1'><MdEmail size={18} /> <Link href="">contact.chocolate@gmail.com</Link></p>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row gap-2 justify-between items-center  text-black py-5 px-4 text-md font-normal '>
                <p>&copy;2024 Chocolate. All Rights Reserved</p>
                <p>Design & Developed by Sariot Hossain</p>
            </div>
        </div>
    )
}

export default MFooter