"use client";

import React, { useState, useCallback, useEffect } from "react";
import Counter from "@/app/components/counter/Counter";
import workData from "@/app/data/work";
import Link from "next/link";
import Evidence from "./(Components)/evidence";
import "./work.css";

export default function Work() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null);
  const [maximumHeight, setMaximumHeight] = useState(360);
  const [minimumHeight, setMinimumHeight] = useState(250);
  const [evidenceHeight, setEvidenceHeight] = useState(maximumHeight);

  const handleMouseMove = useCallback((e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - boundingRect.left,
      y: e.clientY - boundingRect.top,
    });
  }, []);

  const handleMouseEnter = useCallback((index) => {
    setHoverIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  useEffect(() => {
    const updateHeightBasedOnViewport = () => {
      let maxHeight = 360;
      let minHeight = 220;
      if (window.matchMedia("(max-width: 1024px)").matches) {
        maxHeight = 280;
        minHeight = 190;
      }
      if (window.matchMedia("(max-width: 768px)").matches) {
        maxHeight = 200;
        minHeight = 150;
      }
      if (window.matchMedia("(max-width: 540px)").matches) {
        maxHeight = 0;
        minHeight = 0;
      }

      setMaximumHeight(maxHeight);
      setMinimumHeight(minHeight);
      setEvidenceHeight(maxHeight);
    };

    updateHeightBasedOnViewport();
    window.addEventListener("resize", updateHeightBasedOnViewport);

    return () =>
      window.removeEventListener("resize", updateHeightBasedOnViewport);
  }, []);

  useEffect(() => {
    const workContainer = document.querySelector(".work-container");
    const evidenceElement = document.querySelector(".evidence");

    const handleScroll = () => {
      if (!workContainer || !evidenceElement) return;

      const workContainerBottom =
        workContainer.getBoundingClientRect().bottom +
        window.scrollY -
        evidenceElement.offsetHeight;
      const stopPosition = workContainerBottom - evidenceHeight; // Calculate where the "Evidence" should stop moving

      const newHeight = Math.max(
        maximumHeight - 0.5 * window.scrollY,
        minimumHeight
      );
      setEvidenceHeight(newHeight);

      if (window.scrollY >= stopPosition) {
        evidenceElement.style.position = "absolute";
        evidenceElement.style.top = `${stopPosition}px`; // Setting the evidence to stop at the calculated position
      } else {
        evidenceElement.style.position = "fixed";
        evidenceElement.style.top = ""; // Reset to default position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [maximumHeight, minimumHeight, evidenceHeight]);

  return (
    <div className="relative">
      <div className="evidence invisible  sm:visible fixed right-0 sm:-right-2 md:right-0 xl:right-12 lg:right-4 sm:top-[135px] md:top-[150px] lg:top-[190px]">
        <Evidence height={evidenceHeight} />
      </div>
      <div className="work-container">
        <section className="flex flex-col justify-center top-section-p">
          <h1 className="mb-6 text-5xl font-bold text-center font-cervino text-black-shade-300 sm:invisible sm:hidden">
            The evidence
          </h1>
          <h2 className="font-medium leading-tight tracking-tight text-center sm:font-semibold sm:text-start heading-medium text-black-shade-300">
            The project you&apos;re tackling deserves outstanding{" "}
            <span className="tracking-wide uppercase lg:font-bold text-primary-orange-300">
              ATTENTION
            </span>{" "}
            and{" "}
            <span className="tracking-wide uppercase lg:font-bold text-primary-orange-300">
              EFFORT
            </span>
            .
          </h2>
          <div className="flex flex-col justify-between w-full mt-10 md:mt-20 gap-8 sm:gap-16 max-w-[550px] sm:flex-row">
            <Counter
              alignStart={true}
              number={100}
              title="Satisfaction"
              unit="%"
            />
            <Counter alignStart={true} number={40} title="Clients" unit="+" />
            <Counter alignStart={true} number={5} title="Years" unit="+" />
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 sm:gap-y-0 section-y">
          {workData.map((work, index) => (
            <Link
              href={`/work/${work.slug}`}
              key={index}
              className={`card ${
                index % 2 === 0
                  ? "mt-0"
                  : "mt-0 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-24"
              } relative flex flex-col flex-1  `}
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
              <h2 className="mt-3  transition-all duration-200 text-2xl font-medium sm:mt-5 sm:text-[1.7rem] md:text-4xl text-black-shade-300">
                {work.title}
              </h2>
              <div className="flex flex-wrap w-full gap-2 mt-2 sm:mt-3 md:mt-4 sm:gap-3">
                {work.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="px-3 uppercase text-xs sm:text-sm py-1 bg-[#FBE201] font-medium text-black-shade-300 rounded-[4px]"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
