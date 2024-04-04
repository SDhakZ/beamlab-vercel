"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { useWorkDetails } from "@/app/hooks/useWorkDetail";
import { highlightText } from "@/app/utility/highlightText";
import "./workDetail.css";
import { useGlobalState } from "@/app/utility/globalStateProvide";

export default function workDetail() {
  const { setMenuBackgroundBlack } = useGlobalState();
  const processSectionRef = useRef(null);
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
  useEffect(() => {
    const handleScroll = () => {
      if (processSectionRef.current) {
        const topPos = processSectionRef.current.getBoundingClientRect().top;
        setMenuBackgroundBlack(topPos <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMenuBackgroundBlack]);
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
          <div className="relative grid w-full grid-cols-1 gap-6 mt-4 sm:gap-10 sm:grid-cols-3 md:grid-cols-4 lg:mt-6">
            <div className="flex flex-col text-black-shade-300">
              <h2 className="text-sm font-semibold">Project Name: Year</h2>
              <hr className="block mt-1 border-none w-full h-[0.16rem] bg-black-shade-300"></hr>
              <p className="mt-2 text-xl font-medium md:text-xl sm:text-lg">
                {workItem.title}:&nbsp;{workItem.projectDetails.projectYear}
              </p>
            </div>
            <div className="flex flex-col text-black-shade-300">
              <h2 className="text-sm font-semibold">Technology used</h2>
              <hr className="block mt-1  border-none w-full h-[0.16rem] bg-black-shade-300"></hr>
              <p className="mt-2 text-xl font-medium md:text-xl sm:text-lg">
                {workItem.projectDetails.technologyUsed}
              </p>
            </div>
            <div className="flex flex-col text-black-shade-300">
              <h2 className="text-sm font-semibold">Services</h2>
              <hr className="block mt-1 border-none w-full h-[0.16rem] bg-black-shade-300"></hr>
              <p className="mt-2 text-xl font-medium md:text-xl sm:text-lg">
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
            className="w-full relative mt-10 sm:mt-10 md:mt-14 max-w-[1100px]"
          >
            <div className="relative px-6 py-6 sm:py-8 sm:px-10 md:py-12 sm:absolute bg-black-shade-400 md:px-14">
              <h2 className="text-base font-semibold w-fit text-white-shade-100">
                Designing website for a digital agency{" "}
                <hr className="block w-full h-[0.1rem] mt-1 bg-white-shade-100"></hr>
              </h2>

              <p className="text-xl font-normal leading-relaxed sm:leading-normal sm:text-3xl mt-7 text-white-shade-100 ">
                {highlightText(
                  briefText,
                  "text-black-shade-300",
                  "bg-[rgba(251,226,1,0.92)]"
                )}
              </p>
            </div>

            <div
              className="invisible hidden py-12 sm:block sm:visible px-14 bg-white-shade-100 text-white-shade-200 hover:text-black-shade-300"
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
                {highlightText(
                  briefText,
                  "text-white-shade-200",
                  "bg-[#FFAD4F]"
                )}
              </p>
            </div>
          </section>

          <div className="flex flex-wrap md:flex-nowrap mt-10 sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-16 items-center w-full max-w-[1100px]">
            <div className="flex flex-col gap-3 min-w-[350px] md:w-1/2">
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
            <figure className="w-full max-w-[550px]">
              <img
                className="w-full h-auto"
                src={workItem.mainContent.challengeContainer.image}
              />
            </figure>
          </div>
        </div>

        {/*---Brief---*/}
      </div>
      {/*---Process---*/}
      <section
        ref={processSectionRef}
        className="relative margin-t bg-background-black"
      >
        <div className="container-margin-compact padding-y-lg section-layout">
          <div className="mt-24">
            <h2 className="text-base font-semibold uppercase w-fit text-primary-orange-300">
              The Process
              <hr className="w-full border-none h-[0.15rem] mt-1 bg-primary-orange-300" />
            </h2>
            <div className="flex flex-col gap-10 mt-10 sm:gap-44 md:gap-48 lg:gap-56 mb-44">
              {workItem.mainContent.processContainer.map((process, index) => (
                <section
                  className="flex flex-col gap-10 section-class"
                  key={index}
                >
                  <div>
                    <h3 className="text-xl font-semibold sm:text-xl md:text-2xl text-white-shade-200">
                      {process.title}
                    </h3>
                    <p className="mt-4 text-base lg:text-lg max-w-[500px] font-medium text-white-shade-300">
                      {process.description}
                    </p>
                  </div>
                  <div className="relative w-full h-full sm:hidden sm:invisible">
                    <img
                      alt="Active section"
                      className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[220px]"
                      src={process.image}
                    />

                    <svg
                      className=" z-0 w-full sm:max-w-[240px] md:max-w-[400px] lg:max-w-[500px] fade-out"
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
                </section>
              ))}
            </div>
          </div>
          <div
            className={`sm:block invisible hidden sm:visible sticky-image-container ${
              isFading ? "" : "not-fading"
            }`}
          >
            <img
              alt="Active section"
              key={activeImage}
              className="relative z-10 w-full sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] fade-in"
              src={activeImage}
            />

            <svg
              className="absolute z-0 w-full sm:max-w-[240px] md:max-w-[400px] lg:max-w-[500px] fade-out"
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
