"use client";
import React, { useState, useEffect } from "react";
import "./PJ.css";
import { projectJourneyData } from "@/app/data/projectJourney";
import { useGlobalState } from "@/app/utility/globalStateProvide";

const ProjectJourney = React.forwardRef((props, ref) => {
  const [activeItem, setActiveItem] = useState(null);
  const { menuBackgroundBlack } = useGlobalState();

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
      ref={ref}
      className={`relative transition-colors duration-[1300ms] py-8 margin-t sm:py-20 md:py-24 lg:py-28 xl:py-32 ${
        menuBackgroundBlack ? "bg-background-black" : "bg-background-white"
      }`}
    >
      <h2
        className={`mb-12 transition-colors duration-[1300ms] text-3xl font-semibold text-center container-margin sm:mb-14 lg:mb-20 md:mb-16 xl:mb-24 sm:text-3xl lg:text-4xl xl:text-5xl ${
          menuBackgroundBlack ? "text-white-shade-200" : "text-black-shade-300"
        }`}
      >
        Project Journey
      </h2>

      <div className="relative flex flex-col gap-8 sm:flex-row sm:gap-4 md:gap-16 lg:gap-16 xl:gap-16 justify-evenly container-margin">
        <div className="feature-sticky-image-container">
          <ul className="flex flex-col text-xl font-medium gap-14 sm:gap-2 sm:text-lg md:gap-6 lg:gap-8 xl:gap-10 md:text-2xl lg:text-3xl xl:text-4xl text-white-shade-200">
            {projectJourneyData.map((item) => (
              <li
                key={item.id}
                className={`
                  ${
                    activeItem === item.id.toString()
                      ? `${
                          menuBackgroundBlack
                            ? "sm:text-white-shade-100"
                            : "sm:text-black-shade-400"
                        }`
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
                  <p
                    className={`${
                      menuBackgroundBlack
                        ? "text-white-shade-300"
                        : "text-black-shade-100"
                    } mt-4 text-base font-normal whitespace-normal sm:text-base lg:text-lg`}
                  >
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
              <p
                className={`${
                  menuBackgroundBlack
                    ? "text-white-shade-300"
                    : "text-black-shade-100"
                } font-medium sm:text-base lg:text-lg `}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectJourney;
