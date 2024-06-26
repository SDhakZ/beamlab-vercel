"use client";
import React, { useState, useEffect, useRef } from "react";
import { useGlobalState } from "@/app/utility/globalStateProvide";
import Lottie from "lottie-react";
import { LazyMotion, m, domAnimation } from "framer-motion";
import NotFound from "@/app/not-found";

export default function FeatureSection(props) {
  const { selectedServiceData } = props;
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const mainRef = useRef(null);
  const { setMenuBackgroundBlack } = useGlobalState();

  // First useEffect for handling scroll on mainRef
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;

      const topPos = mainRef.current.getBoundingClientRect().top;
      const offset = window.innerHeight / 2;
      const isInMiddle =
        topPos <= offset && topPos >= offset - mainRef.current.offsetHeight;
      setIsDarkTheme(isInMiddle);
      setMenuBackgroundBlack(isInMiddle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMenuBackgroundBlack]);

  // Second useEffect for handling scroll on sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-class");
      let currentSection = sections[0];

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 1.8) {
          currentSection = section;
          setActiveImage(
            selectedServiceData?.serviceDetail.sellingProposition[index].image
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedServiceData]);

  if (!selectedServiceData) {
    return <NotFound />;
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={mainRef}
        className={`${
          isDarkTheme ? "bg-background-black" : "bg-background-white"
        } min-h-screen py-20 sm:py-28 md:py-32 lg:py-36 duration-[1300ms]`}
      >
        <h2
          className={`${
            isDarkTheme ? "text-white-shade-200" : "text-black-shade-300"
          } sm:mb-16 leading-tight md:mb-28 text-center mb-10 text-2xl px-2 sm:text-3xl md:text-4xl lg:text-5xl font-semibold`}
        >
          Why Clients Choose Us?
        </h2>
        <div className="flex flex-col md:gap-16 lg:gap-20 sm:flex-row container-margin-compact">
          <div className="relative mb-[10px] w-full sm:mb-[20px] md:mt-14 md:mb-[50px]">
            <div className="flex flex-col gap-16 max-w-[500px]  sm:gap-36 md:gap-44 lg:gap-44 ">
              {selectedServiceData?.serviceDetail.sellingProposition.map(
                (serviceDetail, index) => (
                  <m.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    viewport={{
                      once: false,
                      amount: 0.5,
                    }}
                    key={index}
                    className="flex flex-col-reverse items-center gap-2"
                  >
                    <section className="section-class" key={index}>
                      <h3
                        className={`${
                          isDarkTheme
                            ? "text-primary-orange-200"
                            : "text-black-shade-300"
                        } text-xl text-center sm:text-start font-semibold sm:text-xl md:text-2xl`}
                      >
                        {serviceDetail.title}
                      </h3>
                      <p
                        className={`${
                          isDarkTheme
                            ? "text-white-shade-300"
                            : "text-black-shade-300"
                        } mt-4 text-base lg:text-lg text-center sm:text-start font-normal `}
                      >
                        {serviceDetail.description}
                      </p>
                    </section>
                    <Lottie
                      className="w-[90px] sm:hidden"
                      animationData={serviceDetail.image}
                      loop={true}
                    />
                  </m.div>
                )
              )}
            </div>
          </div>
          <m.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{
              once: false,
              amount: 0.5,
            }}
            className={`sm:block fade-in justify-center w-full items-center hidden feature-sticky-image-container `}
          >
            <Lottie
              className={`sm:w-[190px] md:w-[250px]`}
              animationData={activeImage}
              loop={true}
            />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
