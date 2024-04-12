"use client";
import React, { useRef } from "react";
import calculateGradient from "@/app/utility/calculateGradient";
import calculateOpacity from "@/app/utility/calculateOpacity";
import useScrollProgress from "@/app/hooks/useScrollProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function offerSection(props) {
  const { selectedServiceData } = props;
  const offerSectionRef = useRef(null);
  const scrollY = useScrollProgress(offerSectionRef);
  return (
    <section
      ref={offerSectionRef}
      className="lg:mt-[170px] sm:mt-[70px] md:mt-[100px] xl:mt-[200px] padding-y-lg"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 justify-evenly container-margin">
        <div className="sticky-image-container">
          <h2
            className={`w-full  max-w-[400px] text-3xl sm:text-3xl sm:max-w-[260px] md:max-w-[300px] font-semibold md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1.15] lg:max-w-[370px] xl:max-w-[450px]`}
          >
            Making you{" "}
            <span
              className="gradient-heading "
              style={{
                background: calculateGradient(scrollY),
              }}
            >
              stand out
            </span>{" "}
            from the competition
          </h2>
        </div>
        <div className="flex gap-10 flex-col md:gap-20 sm:gap-16 lg:gap-24 xl:gap-28 sm:max-w-[280px] w-full md:max-w-[300px] lg:max-w-[370px] xl:max-w-[450px]">
          <h2
            style={{ opacity: calculateOpacity(scrollY) }}
            className="w-full hidden sm:block  text-xl  sm:text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1.15]  "
          >
            Why website development at beamlab?{" "}
          </h2>
          <p className="font-medium sm:text-base md:text-lg text-black-shade-200">
            {selectedServiceData.serviceDetail.serviceBrief}
          </p>
          <div>
            <h3 className="text-2xl font-semibold capitalize sm:text-2xl lg:text-3xl text-black-shade-300">
              What we offer
            </h3>
            <ul className="mt-2 sm:mt-2">
              {selectedServiceData.serviceDetail.offerings.map(
                (offer, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 py-4 text-base font-medium leading-snug border-b-2 text-black-shade-200 sm:py-6 sm:text-base border-black-shade-100"
                  >
                    <FontAwesomeIcon
                      className="text-green-600"
                      icon={faSquareCheck}
                    />
                    {offer}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
