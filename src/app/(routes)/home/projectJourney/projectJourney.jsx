"use client";
import React, { useRef, useState, useEffect } from "react";
import "./PJ.css";
import { projectJourneyData } from "@/app/data/projectJourney";

export default function projectJourney() {
  const pjRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.getAttribute("data-id"));
          }
        });
      },
      {
        root: null, // observing intersections relative to the viewport
        threshold: 0.5, // trigger when 50% of the item is in the viewport
      }
    );

    // Observe each item
    document.querySelectorAll(".project-image").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={pjRef} className="relative py-32 bg-background-black">
      <h2 className="text-5xl text-center mb-36 text-white-shade-200">
        Project Journey
      </h2>

      <div className="relative flex flex-col min-h-screen gap-8 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 justify-evenly container-margin">
        <div className="sticky-image-container">
          <ul className="flex flex-col gap-10 text-4xl text-white-shade-200">
            {projectJourneyData.map((item) => (
              <li
                key={item.id}
                className={
                  activeItem === item.id.toString()
                    ? "text-white"
                    : "text-black-shade-100"
                }
              >
                <span
                  className={` ${
                    activeItem === item.id.toString()
                      ? "text-primary-orange-300"
                      : "text-black-shade-100"
                  } text-base `}
                >
                  &#40;0{item.id}&#41;
                </span>{" "}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-14 flex-col md:gap-16 sm:gap-24 lg:gap-28 xl:gap-36 sm:max-w-[280px] w-full md:max-w-[300px] lg:max-w-[370px] xl:max-w-[460px]">
          {projectJourneyData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 project-image"
              data-id={item.id}
            >
              <img src={item.image} alt="" />
              <p className="font-medium sm:text-base md:text-lg text-white-shade-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
