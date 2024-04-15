"use client";
import React from "react";
import "./carouselOverride.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { partnerData } from "@/app/data/partnerData";
import Link from "next/link";
import { useGlobalState } from "@/app/utility/globalStateProvide";

export default function Carousel() {
  const { menuBackgroundBlack } = useGlobalState();
  return (
    <div
      className={`flex relative duration-[1300ms] flex-col items-center gap-4 overflow-x-hidden bg-cover ${
        menuBackgroundBlack
          ? "bg-partner-carousel-background-dark"
          : "bg-partner-carousel-background"
      }  padding-y-lg`}
    >
      <p
        className={`text-3xl ${
          menuBackgroundBlack ? "text-white-shade-200" : "text-black-shade-300"
        } font-semibold relative duration-[1300ms] text-center sm:text-3xl md:text-4xl lg:text-[2.9rem] container-margin `}
      >
        Our trusted partners
      </p>

      <div className="flex gap-2 md:gap-4 ustify-center items-center w-full mt-4 sm:mt-4 lg:mt-8 max-w-[300px] sm:max-w-[500px] md:max-w-[1100px]">
        <hr className="block w-full h-[0.2rem] bg-black-shade-100" />
        <svg
          className="sm:w-[42px] spin-animate sm:h-[42px] w-[32px] h-[32px]"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21"
            cy="21"
            r="20.1"
            stroke="#313131"
            stroke-width="1.8"
          />
          <path
            d="M30.1 21C30.1 26.6955 28.9988 31.8076 27.2585 35.4623C25.4862 39.1841 23.2137 41.1 21 41.1C18.7863 41.1 16.5138 39.1841 14.7415 35.4623C13.0012 31.8076 11.9 26.6955 11.9 21C11.9 15.3045 13.0012 10.1924 14.7415 6.5377C16.5138 2.8159 18.7863 0.9 21 0.9C23.2137 0.9 25.4862 2.8159 27.2585 6.5377C28.9988 10.1924 30.1 15.3045 30.1 21Z"
            stroke="#313131"
            stroke-width="1.8"
          />
          <path
            d="M21 30.1C15.3045 30.1 10.1924 28.9988 6.5377 27.2585C2.8159 25.4862 0.900001 23.2137 0.900001 21C0.900001 18.7863 2.8159 16.5138 6.5377 14.7415C10.1924 13.0012 15.3045 11.9 21 11.9C26.6955 11.9 31.8076 13.0012 35.4623 14.7415C39.1841 16.5138 41.1 18.7863 41.1 21C41.1 23.2137 39.1841 25.4862 35.4623 27.2585C31.8076 28.9988 26.6955 30.1 21 30.1Z"
            stroke="#313131"
            stroke-width="1.8"
          />
        </svg>
        <hr className="block w-full h-[0.2rem]  bg-black-shade-100" />
      </div>
      <div className="w-full -mt-12 md:-mt-4">
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          allowTouchMove={false}
          preventClicks={false}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          slidesPerView={3}
          speed={9000}
          breakpoints={{
            540: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 130,
            },
          }}
        >
          {partnerData?.map((partner, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="flex items-center justify-center h-full max-h-[100%] pointer-events-none"
                  style={{ height: "150px" }}
                >
                  <img
                    className={`${
                      menuBackgroundBlack ? "invert" : "invert-0"
                    } object-contain object-center `}
                    title={partner?.name}
                    src={partner?.icon}
                    alt={partner?.name}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <hr className="block max-w-[150px] -mt-8 sm:-mt-0 md:max-w-[500px] w-full h-[0.2rem]  bg-black-shade-100" />
      <div className="flex flex-col items-center justify-center gap-6 mt-12 lg:gap-10 md:mt-16">
        <div className="flex gap-2 text-3xl font-bold text-center md:text-4xl font-cervino text-black-shade-200">
          We are waiting for
          <ul className="flicker">
            <li>y</li>
            <li>o</li>
            <li>u</li>
            <li>!</li>
          </ul>
        </div>
        <Link
          className="px-8 py-2 font-medium transition-all rounded-full md:px-10 md:py-3 glow-effect w-fit outline outline-primary-orange-100 outline-2 bg-white-shade-100 "
          href="/contact"
        >
          <span className="text-lg md:text-xl gradient">Join Us Now</span>
        </Link>
      </div>
    </div>
  );
}
