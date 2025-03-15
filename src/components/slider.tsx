'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export function Slider() {
    return (
        <div className="relative flex items-center w-full sm:max-w-6xl max-w-xs overflow-hidden">
            <div className="absolute -left-12 swiper-button-prev z-50 cursor-pointer">
                <svg className="-rotate-180" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" /></svg>
            </div>
            <div className="absolute -right-12 swiper-button-next z-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" /></svg>
            </div>
            <Swiper
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
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
                className="mySwiper swp-1 flex items-center"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="relative w-full h-[364px]">
                        <Image
                            src="/images/dep1.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="relative w-full h-[364px]">
                        <Image
                            src="/images/dep2.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="relative w-full h-[364px]">
                        <Image
                            src="/images/dep3.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="relative w-full h-[364px]">
                        <Image
                            src="/images/dep1.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="relative w-full h-[364px]">
                        <Image
                            src="/images/dep2.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="relative w-full h-[364px]">
                        <Image
                            src="/images/dep3.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}