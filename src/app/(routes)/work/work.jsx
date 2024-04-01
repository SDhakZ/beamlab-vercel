"use client";

import React, { useState, useCallback } from "react";
import Counter from "@/app/components/counter/Counter";
import workData from "@/app/data/work";
import Link from "next/link";

export default function Work() {
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
    <div className="min-h-screen">
      <div className="container-margin-compact">
        <section className="flex flex-col justify-center top-section-p">
          <h1 className="font-medium leading-snug heading-medium text-black-shade-300">
            The project you're tackling deserves outstanding{" "}
            <span className="font-medium uppercase lg:font-bold text-primary-orange-300">
              ATTENTION
            </span>{" "}
            and{" "}
            <span className="font-medium uppercase lg:font-bold text-primary-orange-300">
              EFFORT
            </span>
            .
          </h1>
          <div className="flex flex-col justify-between w-full mt-10 md:mt-20 gap-8 sm:gap-16 max-w-[550px] sm:flex-row">
            <Counter number={100} title="Satisfaction" unit="%" />
            <Counter number={40} title="Clients" unit="+" />
            <Counter number={5} title="Years" unit="+" />
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-0 section-y">
          {workData.map((work, index) => (
            <Link
              href={`/work/${work.slug}`}
              key={index}
              className={`${
                index % 2 === 0 ? "mt-0" : "sm:mt-20 md:mt-24"
              } relative flex flex-col flex-1  max-w-[550px]`}
            >
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-md cursor-none"
              >
                <img className="w-full " src={work.poster} />
                <p className="absolute z-20 font-semibold font-cervino text-sm sm:text-md uppercase px-2 py-1 rounded-[4px] left-3 top-3 bg-black-shade-300 text-white-shade-200">
                  Case Study
                </p>
                {hoverIndex === index && (
                  <div
                    className="absolute z-10 flex items-center justify-center rounded-full w-28 h-28 sm:w-36 sm:h-36 bg-black-shade-300"
                    style={{
                      left: `${mousePosition.x}px`,
                      top: `${mousePosition.y}px`,
                      transform: "translate(-50%, -50%)", // Center the button on the cursor
                    }}
                  >
                    <div className="flex items-center justify-center w-24 h-24 text-sm leading-snug text-white rounded-full sm:w-32 sm:h-32 outline outline-2 outline-offset-0">
                      <span className="w-24 text-center">View Case Study</span>
                    </div>
                  </div>
                )}
              </div>
              <h2 className="mt-3 text-2xl font-medium sm:mt-5 sm:text-[1.7rem] md:text-4xl text-black-shade-300">
                {work.title}
              </h2>
              <div className="flex flex-wrap w-full gap-2 mt-2 sm:mt-3 sm:gap-3">
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
