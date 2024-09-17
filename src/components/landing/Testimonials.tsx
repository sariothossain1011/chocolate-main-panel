"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ArrowButton from "../button/ArrowButton";
import p4 from "../../../public/images/p3.jpg";
interface Testimonial {
    id: string;
    title: string;
    description: string;
    name: string;
    position: string;
    image: string;
}

const Testimonials: React.FC = () => {
    const testimonialData: Testimonial[] = [
        {
            id: "1",
            title: "Unlocking New Levels of Speed and Endurance",
            description:
                "Our Product Return Policy Exclusively Designed to Exceed Your Expectations and Ensure Your Utmost Satisfaction.",
            name: "Abdur Rouf Jibon",
            position: "Managing Director",
            image: p4.src,
        },
        {
            id: "2",
            title: "Innovative Solutions for Modern Challenges",
            description:
                "Experience cutting-edge technology with our tailored solutions designed to meet contemporary demands.",
            name: "Sara Khan",
            position: "Chief Technology Officer",
            image: p4.src,
        },
        {
            id: "3",
            title: "Exceptional Quality and Outstanding Support",
            description:
                "Our commitment to quality ensures exceptional results and unparalleled support for our clients.",
            name: "Ali Raza",
            position: "Product Manager",
            image: p4.src,
        },
        {
            id: "4",
            title: "Transforming Ideas into Reality",
            description:
                "From concept to execution, we transform your ideas into innovative solutions that drive success.",
            name: "Fatima Ali",
            position: "Creative Director",
            image: p4.src,
        },
        {
            id: "5",
            title: "Driving Efficiency and Innovation",
            description:
                "Maximize your potential with our solutions that blend efficiency with groundbreaking innovation.",
            name: "Omar Faruk",
            position: "Operations Manager",
            image: p4.src,
        }
    ];

    const swiperRef: React.MutableRefObject<SwiperType | null> =
        useRef<SwiperType | null>(null);

    return (
        <>
            <div className="p-4">
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="py-4">
                        <p className="text-md font-medium md:text-xl uppercase text-gray-600 lg:mb-3">
                            TESTIMONIALS
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Customers Reviews
                        </h2>
                    </div>
                    <div className="swiper-nav-btns flex gap-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="flex justify-center items-center"
                        >
                            <ArrowButton direction="left" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="flex justify-center items-center"
                        >
                            <ArrowButton direction="right" />
                        </button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        760: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="bg-slate-100 px-8 py-10 rounded-md grid gap-5"
                            style={{ minHeight: "300px" }} // Adjust minHeight as needed
                        >
                            <h2 className="text-sm font-semibold py-1 sm:text-3xl text-slate-900">
                                &quot;{item.title}&quot;
                            </h2>
                            <p className="text-sm font-normal py-1 sm:text-md flex-grow">
                                {item.description}
                            </p>

                            <div className="flex justify-start h-20 items-center gap-4 py-4">
                                <Image
                                    src={item.image}
                                    width={40}
                                    height={40}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="flex flex-col">
                                    <p className="text-xl font-bold py-1 sm:text-md">
                                        {item.name}
                                    </p>
                                    <p className="text-sm font-normal py-1 sm:text-md">
                                        {item.position}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Testimonials;
