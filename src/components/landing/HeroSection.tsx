"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import b1 from "../../../public/images/b1.jpg";
import b2 from "../../../public/images/b2.jpg";
// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ArrowButton from "../button/ArrowButton";

interface Testimonial {
  id: string,
  title: string,
  image: string;
}

const HeroSection: React.FC = () => {
  const testimonialData: Testimonial[] = [
    {
      id: "1",
      title: "hello",
      image: b1.src,

    },
    {
      id: "2",
      title: "hello",
      image: b2.src,
    },
    {
      id: "3",
      title: "hello",
      image: b1.src,
    },
    {
      id: "4",
      title: "hello",
      image: b2.src,
    },
  ];

  const swiperRef: React.MutableRefObject<SwiperType | null> =
    useRef<SwiperType | null>(null);

  return (
    <>
      <div className=" md:p-4">
        
        <Swiper
          slidesPerView={1}
          // spaceBetween={10}
          loop={true}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   760: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   1024: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
          // }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonialData.map((item) => (
            <SwiperSlide
              key={item.id}
              className=" w-full min-h-[200px] md:min-h-[350px] bg-slate-100 px-8 py-10 rounded-md grid gap-5"
              // style={{ minHeight: "350px" }} // Adjust minHeight as needed
            >

              <Image
                src={item.image}
               fill
                alt={item.title}
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-row justify-between items-center mt-4">
          
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
      </div>
    </>
  );
};

export default HeroSection;
