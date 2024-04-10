"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { serviceData } from "@/app/data/service";
import "./serviceDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/app/components/testimonial/testimonial";
import useScrollProgress from "@/app/hooks/useScrollProgress";
import calculateGradient from "@/app/utility/calculateGradient";
import calculateOpacity from "@/app/utility/calculateOpacity";

export default function ServiceDetail() {
  const params = useParams();
  const serviceSlug = params.serviceSlug;
  const offerSectionRef = useRef(null);
  const scrollY = useScrollProgress(offerSectionRef);

  const selectedServiceData = serviceData.find(
    (service) => service.slug === serviceSlug
  );

  return (
    <div>
      <section className="relative flex flex-col-reverse items-center justify-between gap-6 sm:gap-0 sm:flex-row ">
        <div className="z-10 px-2 bg-black-shade-400 py-3 sm:px-0 sm:py-0 sm:bg-transparent min-w-[100px]  ml-0 flex md:ml-8 sm:ml-7 lg:ml-12 xl:ml-52 sm:max-w-[120px] sm:min-w-[120px] md:min-w-[200px] md:max-w-[220px] lg:min-w-[410px] lg:max-w-[420px]">
          <h1 className="w-full text-center text-white-shade-100 sm:text-left sm:text-black-shade-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:-mt-6 font-semibold md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.2] capitalize ">
            {selectedServiceData?.serviceDetail.heroTitle}
          </h1>
        </div>
        <figure className="w-full max-w-[900px] right-0">
          <img src={selectedServiceData?.serviceDetail.heroImage} />
        </figure>
      </section>

      <section
        ref={offerSectionRef}
        className="lg:mt-[170px] sm:mt-[70px] md:mt-[100px] xl:mt-[200px] padding-y-lg"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 justify-evenly container-margin">
          <div className="sticky-image-container">
            <h2
              className={`w-full  max-w-[220px] text-xl sm:text-3xl sm:max-w-[260px] md:max-w-[300px] font-semibold md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1.15] lg:max-w-[370px] xl:max-w-[450px]`}
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
              Find out the type of services we provide{" "}
            </h2>
            <p className="font-medium sm:text-base md:text-lg text-black-shade-200">
              At Beamlab we specialize in delivering cutting-edge web
              development services tailored to meet the unique needs of
              businesses and organizations across various industries. Our team
              of experienced developers and designers is dedicated to crafting
              exceptional digital experiences that drive results. Explore our
              range of services below:
            </p>
            <div>
              <h3 className="font-semibold capitalize sm:text-2xl lg:text-3xl text-black-shade-300">
                What we offer
              </h3>
              <ul className="mty-0 sm:mt-2">
                {selectedServiceData.serviceDetail.offerings.map(
                  (offer, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 py-3 text-sm font-medium leading-snug border-b-2 sm:py-6 sm:text-base border-black-shade-100"
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
      <section className="margin-t"></section>
    </div>
  );
}
