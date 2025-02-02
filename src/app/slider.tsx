"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RoomInspiration() {
  const slides = [
    {
      id: 1,
      image: "/blog2.jpg",
      title: "Inner Peace",
      category: "Bed Room",
    },
    {
      id: 2,
      image: "/blog1.jpg",
      title: "Modern Dining",
      category: "Dining Room",
    },
    {
      id: 3,
      image: "/blog3.jpg",
      title: "Minimalist Style",
      category: "Living Room",
    },
  ];

  return (
    <section className="bg-[#FDFBF8] px-4 py-12 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* 
          On large screens, we still want a 3-column layout:
          - 1 column for text (col-span-1)
          - 2 columns for the slider (col-span-2)
          
          On medium screens (≥768px and <1024px), 
          switch to a 2-column layout (md:grid-cols-2).
          
          On small screens (<768px), it defaults to 1 column.
        */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Text Content */}
          <div className="flex flex-col justify-center md:col-span-2 lg:col-span-1">
            <h1 className="text-4xl font-poppinsBold leading-tight text-gray md:text-4xl">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="mt-4 font-poppins text-lg text-gray-600">
              Our designer already made a lot of beautiful prototype rooms that
              inspire you.
            </p>
            <button className="mt-8 w-fit bg-[#B8884B] px-8 py-3 font-poppins text-white transition-colors hover:bg-[#A67A43]">
              Explore More
            </button>
          </div>

          {/* Swiper Slider */}
          {/* 
            Note: On medium screens we use 'md:col-span-2' 
            (to make sure it spans across the entire row if needed),
            and on large screens, it spans 2 columns ('lg:col-span-2').
          */}
          <div className="relative md:col-span-2 lg:col-span-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="relative"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {/* Room Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white p-6 shadow-md">
                      <div className="flex items-center gap-4 font-poppins text-sm text-gray-600">
                        <span>{`0${index + 1}`}</span>
                        <span className="h-px w-8 bg-gray-300"></span>
                        <span>{slide.category}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <h3 className="font-poppins text-2xl font-medium text-gray-900">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}