"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { useWorkDetails } from "@/app/hooks/useWorkDetail";
import { highlightText } from "@/app/utility/highlightText";
import "./test.css";

export default function workDetail() {
  const router = useRouter();
  const params = useParams();
  const workSlug = params.workSlug;
  const workItem = useWorkDetails(workSlug);

  if (!workItem) {
    return <>Not found</>;
  }

  const briefText = workItem.mainContent.briefContainer.brief;
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isFading, setIsFading] = useState(false);
  const updateCursorPos = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPos);

    return () => {
      document.removeEventListener("mousemove", updateCursorPos);
    };
  }, []);

  const [activeImage, setActiveImage] = useState(
    workItem.mainContent.processContainer[0].image
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-class"); // Ensure your sections have a common class for this query
      let currentSection = sections[0];

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          // Adjust this threshold as needed
          currentSection = section;
          setActiveImage(workItem.mainContent.processContainer[index].image);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Make sure to add dependencies if needed

  return (
    <div>
      <div className="flex flex-col pb-10 mt-6 container-margin">
        <button
          className="self-end text-lg font-medium underline md:text-xl text-black-shade-300"
          onClick={() => router.back()}
        >
          &lt;Back to work
        </button>
        <div className="flex flex-col items-center gap-5">
          <h1 className="self-start mt-12 text-3xl font-medium md:text-4xl lg:text-5xl text-black-shade-300">
            {workItem.catchPhrase}
          </h1>
          <div className="flex flex-wrap items-center justify-between w-full gap-4 mt-4 md:mt-8 lg:mt-10">
            <img
              className="w-44 md:w-48"
              src={workItem.projectDetails.projectLogo}
            />
            <a className="text-base leading-none  font-medium underline text-[#006DAA]">
              {workItem.projectDetails.projectLink}
            </a>
          </div>
          <img
            className="mt-2"
            src={workItem.projectDetails.projectHeroImage}
          />
          <ul className="flex flex-wrap self-start gap-3 mt-3">
            {workItem.tags.map((tag, index) => (
              <li
                key={index}
                className="px-3 py-1 text-base font-medium uppercase rounded-sm text-black-shade-200 bg-primary-yellow-400"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="relative grid w-full grid-cols-4 gap-10 lg:mt-6">
            <div className="flex flex-col text-black-shade-300">
              <h2 className="text-sm font-semibold">Project Name: Year</h2>
              <hr className="block w-full h-[0.2rem] bg-black-shade-300"></hr>
              <p className="mt-2 text-xl font-medium">
                {workItem.title}:&nbsp;{workItem.projectDetails.projectYear}
              </p>
            </div>
            <div className="flex flex-col text-black-shade-300">
              <h2 className="text-sm font-semibold">Technology used</h2>
              <hr className="block w-full h-[0.2rem] bg-black-shade-300"></hr>
              <p className="mt-2 text-xl font-medium">
                {workItem.projectDetails.technologyUsed}
              </p>
            </div>
            <div className="flex flex-col text-black-shade-300">
              <h2 className="text-sm font-semibold">Services</h2>
              <hr className="block w-full h-[0.2rem] bg-black-shade-300"></hr>
              <p className="mt-2 text-xl font-medium">
                {workItem.projectDetails.projectService}
              </p>
            </div>
          </div>
          {/*---Brief---*/}
          <section
            onMouseMove={updateCursorPos}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={sectionRef}
            className="w-full relative mt-14 max-w-[1100px]"
          >
            <div className="absolute py-12 bg-black-shade-400 px-14">
              <h2 className="text-base font-semibold w-fit text-white-shade-100">
                Designing website for a digital agency{" "}
                <hr className="block w-full h-[0.1rem] mt-1 bg-white-shade-100"></hr>
              </h2>

              <p className="text-3xl font-normal leading-normal mt-7 text-white-shade-100 ">
                {highlightText(briefText)}
              </p>
            </div>

            <div
              className="py-12 px-14 bg-white-shade-100 text-white-shade-200 hover:text-black-shade-300"
              style={{
                clipPath: isHovering
                  ? `circle(70px at ${cursorPos.x}px ${cursorPos.y}px)`
                  : "none",
              }}
            >
              <h2 className="text-base font-semibold w-fit ">
                Designing website for a digital agency{" "}
                <hr className="block w-full h-[0.1rem] mt-1 bg-black-shade-100"></hr>
              </h2>

              <p className="text-3xl font-normal leading-normal mt-7 text-black-shade-100 ">
                {highlightText(briefText, "bg-[#FFAD4F]")}
              </p>
            </div>
          </section>
          <div className="flex mt-24 gap-16 items-center w-full max-w-[1100px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold uppercase w-fit text-primary-orange-300">
                The Challenge
                <hr className="block w-full h-[0.2rem] mt-1 bg-primary-orange-200"></hr>
              </h2>
              <h3 className="mt-2 text-3xl font-semibold">
                {workItem.mainContent.challengeContainer.title}
              </h3>
              <p className="text-lg font-medium leading-relaxed text-black-shade-100">
                {workItem.mainContent.challengeContainer.challenge}
              </p>
            </div>
            <img
              className="w-full max-w-[550px]"
              src={workItem.mainContent.challengeContainer.image}
            />
          </div>
        </div>

        {/*---Brief---*/}
      </div>
      <section className="relative margin-t bg-background-black">
        <div className="container-margin-compact padding-y-lg section-layout">
          <div className="mt-24">
            <h2 className="text-base font-semibold uppercase w-fit text-primary-orange-300">
              The Process
              <hr className="w-full border-none h-[0.15rem] mt-1 bg-primary-orange-300" />
            </h2>
            <div className="flex flex-col gap-56 mt-10 mb-44">
              {workItem.mainContent.processContainer.map((process, index) => (
                <section className="section-class" key={index}>
                  <h3 className="text-2xl font-semibold text-white-shade-200">
                    {process.title}
                  </h3>
                  <p className="mt-4 text-lg max-w-[500px] font-medium text-white-shade-300">
                    {process.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
          <div
            className={`sticky-image-container ${isFading ? "" : "not-fading"}`}
          >
            <img
              alt="Active section"
              key={activeImage}
              className="relative z-10 w-[330px] fade-in"
              src={activeImage}
            />

            <svg
              className="absolute z-0 w-[550px] fade-out"
              viewBox="0 0 520 471"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M519.309 254.95C519.309 378.386 346.936 471 223.5 471C100.064 471 0 370.936 0 247.5C0 124.064 136.564 0 260 0C383.436 0 519.309 45.5 519.309 254.95Z"
                fill="#FBE201"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
