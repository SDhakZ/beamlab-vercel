"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { serviceData } from "@/app/data/service";
import "./serviceDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function ServiceDetail() {
  const params = useParams();
  const serviceSlug = params.serviceSlug;
  const offerSectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const selectedServiceData = serviceData.find(
    (service) => service.slug === serviceSlug
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      const sectionTop = offerSectionRef.current.offsetTop;
      const sectionHeight = offerSectionRef.current.offsetHeight;

      if (
        windowScroll > sectionTop - window.innerHeight &&
        windowScroll < sectionTop + sectionHeight
      ) {
        const maxScroll = sectionHeight + window.innerHeight;
        const scrolled = windowScroll - sectionTop + window.innerHeight;
        const scrollPercent = scrolled / maxScroll;
        setScrollY(scrollPercent * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(`ScrollY: ${scrollY}`);
  }, [scrollY]);

  const calculateGradient = () => {
    const scrollProgress = Math.min(100, Math.max(0, scrollY));
    // As the user scrolls down, the starting point of the orange color moves upwards
    const orangeStart = Math.max(0, 200 - 4 * scrollProgress); // Start the orange gradient earlier
    const orangeEnd = 90; // End of the orange color

    return `linear-gradient(to bottom, rgba(254, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${orangeStart}%, rgba(254, 150, 0, 1) ${orangeEnd}%)`;
  };
  return (
    <div>
      <section className="relative flex items-center justify-between ">
        <div className="z-10 max-w-[120px] min-w-[100px] ml-5 flex md:ml-8 sm:ml-7 lg:ml-12 xl:ml-52 sm:max-w-[120px] sm:min-w-[120px] md:min-w-[200px] md:max-w-[220px] lg:min-w-[410px] lg:max-w-[420px]">
          <h1 className="w-full text-black-shade-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:-mt-6 font-medium md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.2] capitalize ">
            {selectedServiceData?.serviceDetail.heroTitle}
          </h1>
        </div>
        <figure className=" w-full max-w-[900px] right-0">
          <img src={selectedServiceData?.serviceDetail.heroImage} />
        </figure>
      </section>

      <section ref={offerSectionRef} className="xl:mt-[200px] padding-y-lg">
        <div className="flex gap-24 justify-evenly container-margin">
          <div className="sticky-image-container">
            <h2
              className={`w-full font-semibold lg:text-6xl lg:leading-[1.15] max-w-[450px]`}
            >
              Making you{" "}
              <div
                className="gradient-heading "
                style={{
                  background: calculateGradient(),
                }}
              >
                stand out
              </div>{" "}
              from the competition
            </h2>
          </div>
          <div className="flex flex-col gap-28 w-full max-w-[450px]">
            <h2 className="w-full font-semibold lg:text-6xl lg:leading-[1.15] ">
              Find out the type of services we provide{" "}
            </h2>
            <p className="text-lg font-medium text-black-shade-200">
              At Beamlab we specialize in delivering cutting-edge web
              development services tailored to meet the unique needs of
              businesses and organizations across various industries. Our team
              of experienced developers and designers is dedicated to crafting
              exceptional digital experiences that drive results. Explore our
              range of services below:
            </p>
            <div>
              <h3 className="text-3xl font-bold capitalize text-black-shade-300">
                What we offer
              </h3>
              <ul className="mt-2">
                {selectedServiceData.serviceDetail.offerings.map(
                  (offer, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 py-6 border-b-2 border-black-shade-100"
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
