"use client";

import React, { useState, useCallback, useEffect } from "react";
import "./evidence.css";
import workData from "../../../data/work";
import Link from "next/link";
import EvidenceSVG from "../../work/(Components)/evidence";
import { useGlobalState } from "@/app/utility/globalStateProvide";
import Aos from "aos";
import "aos/dist/aos.css";

function useResponsiveHeight() {
  const [height, setHeight] = useState("250px");

  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 1024) {
        setHeight("270px"); // Large screens
      } else if (window.innerWidth >= 768) {
        setHeight("200px");
      } else {
        setHeight("150px");
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize(); // Initialize on mount

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return height;
}

export default function EvidenceSection() {
  const { menuBackgroundBlack } = useGlobalState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null);
  const responsiveHeight = useResponsiveHeight();
  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth > 540) {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - boundingRect.left,
        y: e.clientY - boundingRect.top,
      });
    }
  }, []);

  const handleMouseEnter = useCallback((index) => {
    if (window.innerWidth > 540) {
      setHoverIndex(index);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth > 540) {
      setHoverIndex(null);
    }
  }, []);

  return (
    <div className="relative flex flex-col h-full overflow-hidden sm:flex-row-reverse padding-y-lg">
      <div className="container-margin sm:hidden">
        <h3
          className={`${
            menuBackgroundBlack
              ? "text-white-shade-200"
              : "text-black-shade-300c"
          } mb-10 text-4xl font-semibold transition-colors duration-[1300ms]`}
        >
          The Evidence
        </h3>
      </div>

      <div className="absolute hidden sm:block evidence-height">
        <div className="sticky transition-all duration-1000 md:mr-0 lg:mr-10 top-44 h-fit sm:visible ">
          <EvidenceSVG
            color={menuBackgroundBlack ? "#fff" : "#282828"}
            height={responsiveHeight}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="work-container ">
          <section className="flex flex-col gap-14 sm:ap-10">
            {workData.map((work, index) => (
              <Link
                href={`/work/${work.slug}`}
                key={index}
                className={`card ${
                  index % 2 === 0 ? "self-start" : "self-end"
                } relative w-full flex flex-col flex-1 sm:max-w-[50%]`}
                data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              >
                <div
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative overflow-hidden rounded-md cursor-none"
                >
                  <img className="w-full" alt={work.title} src={work.poster} />
                  <p className="absolute z-20 font-semibold font-cervino text-sm sm:text-md uppercase px-2 py-1 rounded-[4px] left-3 top-3 bg-black-shade-300 text-white-shade-200">
                    Case Study
                  </p>
                  {hoverIndex === index && (
                    <div
                      className="absolute z-10 flex items-center justify-center rounded-full w-28 h-28 sm:w-24 sm:h-24 md:w-36 md:h-36 bg-black-shade-300"
                      style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="flex items-center justify-center w-24 h-24 text-sm leading-snug text-white rounded-full sm:w-20 sm:h-20 md:w-[7.5rem] md:h-[7.5rem] outline outline-2 outline-offset-0">
                        <span className="w-24 text-xs text-center md:text-base">
                          View Case Study
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between w-full gap-0 mt-3 sm:gap-2 sm:flex-row sm:flex-wrap sm:mt-5">
                  <h2 className="transition-all duration-200 text-2xl font-medium  sm:text-[1.5rem] md:text-3xl text-black-shade-300">
                    {work.title}
                  </h2>

                  <p className="text-lg font-normal sm:text-lg mt-1 sm:mt-0 max-w-[290px] sm:font-normal md:font-medium text-black-shade-200">
                    {work.catchPhrase}
                  </p>
                </div>
                <div className="flex flex-wrap w-full gap-2 mt-3 sm:mt-5 md:mt-4 sm:gap-3">
                  {work.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 uppercase text-sm sm:text-sm py-1 bg-[#FBE201] font-medium text-black-shade-300 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
