"use client";
import React, { useRef, useState, useEffect } from "react";
import "./PJ.css";
import { projectJourneyData } from "@/app/data/projectJourney";

export default function projectJourney() {
  const pjRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".project-image");
      let activeId = null;

      items.forEach((item) => {
        const { top, bottom } = item.getBoundingClientRect();
        const vpHeight = window.innerHeight;
        // Check if the item is in the viewport
        if (top < vpHeight / 2 && bottom > vpHeight / 2) {
          activeId = item.getAttribute("data-id");
        }
      });

      if (activeId !== null) {
        setActiveItem(activeId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={pjRef}
      className="relative py-16 margin-t sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background-black"
    >
      <h2 className="mb-12 text-3xl font-semibold text-center container-margin sm:mb-14 lg:mb-20 md:mb-16 xl:mb-24 sm:text-3xl lg:text-4xl xl:text-5xl text-white-shade-200">
        Project Journey
      </h2>

      <div className="relative flex flex-col gap-8 sm:flex-row sm:gap-4 md:gap-16 lg:gap-16 xl:gap-16 justify-evenly container-margin">
        <div className="sticky-image-container">
          <ul className="flex flex-col text-xl font-medium gap-14 sm:gap-2 sm:text-lg md:gap-6 lg:gap-8 xl:gap-10 md:text-2xl lg:text-3xl xl:text-4xl text-white-shade-200">
            {projectJourneyData.map((item) => (
              <li
                key={item.id}
                className={`
                  ${
                    activeItem === item.id.toString()
                      ? "sm:text-white-shade-100"
                      : "sm:text-black-shade-100"
                  } flex-col flex gap-4 whitespace-nowrap text-white-shade-100
                `}
              >
                <div>
                  <span
                    className={` ${
                      activeItem === item.id.toString()
                        ? "sm:text-primary-orange-300"
                        : "sm:text-black-shade-100"
                    } text-base text-primary-orange-300`}
                  >
                    &#40;0{item.id}&#41;
                  </span>{" "}
                  {item.name}
                </div>
                <div className="relative w-full h-full sm:hidden sm:invisible">
                  <img loading="lazy" src={item.image} alt={item.name} />
                  <p className="text-base font-normal whitespace-normal sm:text-base lg:text-lg text-white-shade-300">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex gap-14 flex-col md:gap-16 sm:gap-24 lg:gap-28 xl:gap-36 sm:max-w-[280px] w-full md:max-w-[400px] lg:max-w-[480px] xl:max-w-[550px]">
          {projectJourneyData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 project-image"
              data-id={item.id}
            >
              <img src={item.image} alt={item.name} />
              <p className="font-medium sm:text-base lg:text-lg text-white-shade-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
