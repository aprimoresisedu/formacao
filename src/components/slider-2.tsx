'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export function Slider2({ imagesList }: { imagesList: string[] }) {
    return (
        <Swiper
            spaceBetween={1}
            grabCursor={true}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            autoplay={{
                delay: 1000
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
                1000: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 1
                },
                300: {
                    slidesPerView: 1
                }
            }}
            className="mySwiper sm:w-full sm:max-w-2xl flex items-center gap-2 ms-0 me-0"
        >
            {imagesList.map((image: string, index: number) => (
                <SwiperSlide key={index} className="swiper-slide flex justify-center w-[280px] sm:w-[150px]">
                    <div className="flex justify-center">
                        <div className="relative w-full sm:w-[215px] sm:h-[300px] w-[300px] h-[418px] rounded-xl overflow-hidden">
                            <Image
                                src={`/images/carrossel/${image}.png`}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}