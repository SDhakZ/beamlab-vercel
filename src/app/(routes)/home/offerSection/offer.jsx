"use client";
import React, { useRef } from "react";
import calculateGradient from "@/app/utility/calculateGradient";
import useScrollProgress from "@/app/hooks/useScrollProgress";
import { menuData } from "../../../data/companyInfo";
import calculateOpacity from "@/app/utility/calculateOpacity";
import Link from "next/link";
import "./offer.css";
import { useGlobalState } from "@/app/utility/globalStateProvide";
import { LazyMotion, m, domMax } from "framer-motion";

export default function Offer() {
  const { menuBackgroundBlack } = useGlobalState();
  const offerRef = useRef(null);
  const scrollParallax = useScrollProgress(offerRef);
  const startOffset = 60;
  const newPositionY = Math.round(
    startOffset - (scrollParallax / 100) * startOffset
  );
  const newPositionYBlue = Math.round(50 - (scrollParallax / 100) * 50);
  const scrollY = useScrollProgress(offerRef);
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeUpLinks = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeOutVariant = {
    // Initial state when the element is fully in view
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    // State to transition to as the element starts to go out of view
    hidden: {
      opacity: 0,
      y: -50, // Moves up as it fades out
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <LazyMotion features={domMax}>
      <section
        ref={offerRef}
        className={`relative transition-colors duration-[1300ms] padding-y ${
          menuBackgroundBlack ? "bg-background-black" : "bg-background-white"
        }`}
      >
        <style>
          {`
          .orange-wave::before {
            background-position-y: ${newPositionY}px !important;
          }

          .blue-wave::before {
            background-position-y: ${newPositionYBlue}px !important;
          }
          
          @media (max-width: 540px) {
        .orange-wave::before, .blue-wave::before {
          background-position-y: calc(${newPositionY}px / 2) !important;
          /* Example: Adjusts the background-position-y for smaller screens */
          /* You can replace the calculation above with any responsive logic needed */
        }
      }
        `}
        </style>

        <div className="relative flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 justify-evenly container-margin">
          <div className="sticky-image-container-offer">
            <h2
              className={`w-full ${
                menuBackgroundBlack ? "text-white-shade-200" : ""
              } transition-colors duration-[1300ms] uppercase max-w-[400px] text-3xl sm:text-3xl sm:max-w-[260px] md:max-w-[300px] font-semibold md:text-4xl lg:text-5xl xl:text-6xl xl:leading-[1.18] lg:leading-[1.15] lg:max-w-[370px] xl:max-w-[450px]`}
            >
              <div className="wave-container">
                <span className="wave-text orange-wave" data-text="FUELING">
                  FUELING
                </span>
              </div>{" "}
              your needs with our{" "}
              <span
                className="gradient-heading "
                style={{
                  background: calculateGradient(scrollParallax),
                }}
              >
                expertise
              </span>{" "}
              and services
            </h2>
          </div>
          <div className="flex gap-10 flex-col md:gap-20 sm:gap-16 lg:gap-24 xl:gap-28 sm:max-w-[280px] w-full md:max-w-[300px] lg:max-w-[370px] xl:max-w-[460px]">
            <h2
              style={{ opacity: calculateOpacity(scrollY) }}
              className={`w-full hidden sm:block  text-xl  sm:text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1.15] uppercase xl:leading-[1.18] ${
                menuBackgroundBlack
                  ? "text-white-shade-200"
                  : "text-black-shade-300"
              }`}
            >
              <span className="wave-text blue-wave" data-text="TIDAL WAVE">
                TIDAL WAVE
              </span>{" "}
              of ingenuity for large-scale application{" "}
            </h2>
            <m.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{
                once: false,
                amount: 0.5,
                margin: "-20% 0px -20% 0px",
              }}
              className={`font-medium sm:text-base md:text-lg ${
                menuBackgroundBlack
                  ? "text-white-shade-200"
                  : "text-black-shade-200"
              }`}
            >
              Our agency excels in crafting innovative software solutions for
              large-scale projects. With a team skilled in the latest
              technologies, we deliver exceptional results that surpass client
              expectations.
            </m.p>
            <div>
              <h3
                data-aos="fade-up"
                className={`text-2xl font-semibold capitalize sm:text-2xl lg:text-3xl ${
                  menuBackgroundBlack
                    ? "text-white-shade-200"
                    : "text-black-shade-300"
                } `}
              >
                What we offer
              </h3>
              <ul data-aos="fade-up" className="mt-2 sm:mt-2">
                {menuData[1].items.map((service, index) => (
                  <m.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUpLinks}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }} // Ensures the animation occurs every time the element comes into view
                    className={`flex items-center gap-2 py-4 text-base font-medium leading-snug transition-all duration-200 border-b-2 ${
                      menuBackgroundBlack
                        ? "text-white-shade-200"
                        : "text-black-shade-200"
                    } sm:py-6 sm:text-lg hover:text-primary-orange-300 border-black-shade-100`}
                  >
                    <Link href={service.link}> {service.title}</Link>
                  </m.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
