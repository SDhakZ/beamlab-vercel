"use client";
import React, { useState, useCallback } from "react";
import workData from "@/app/data/work";
import Link from "next/link";

export default function recommend() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null);

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

  return (
    <div className="container-margin-compact margin-t padding-y-lg">
      <h3 className="mb-5 text-3xl font-semibold text-center sm:mb-10 md:mb-14 lg:mb-24 text-black-shade-300 md:text-4xl sm:text-3xl lg:text-4xl xl:text-5xl">
        Some of our works
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 sm:gap-y-0 section-y">
        {workData.slice(0, 2).map((work, index) => (
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
  );
}
