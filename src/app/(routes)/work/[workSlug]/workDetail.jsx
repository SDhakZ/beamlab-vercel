"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { useWorkDetails } from "@/app/hooks/useWorkDetail";
import "./workDetail.css";
import { useGlobalState } from "@/app/utility/globalStateProvide";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brief from "../(Components)/brief";

export default function WorkDetail() {
  const { setMenuBackgroundBlack } = useGlobalState();
  const processSectionRef = useRef(null);
  const router = useRouter();
  const params = useParams();
  const workSlug = params.workSlug;
  const workItem = useWorkDetails(workSlug);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [activeImage, setActiveImage] = useState(
    workItem ? workItem.mainContent.processContainer[0].image : null
  );

  const briefText = workItem.mainContent.briefContainer.brief;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-class");
      let currentSection = sections[0];

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentSection = section;
          setActiveImage(workItem.mainContent.processContainer[index].image);
        } else {
          return null;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [workItem]);

  useEffect(() => {
    const handleScroll = () => {
      if (processSectionRef.current) {
        const topPos = processSectionRef.current.getBoundingClientRect().top;
        const offset = window.innerHeight / 2; // Middle of the viewport

        const isInMiddle =
          topPos <= offset &&
          topPos >= offset - processSectionRef.current.offsetHeight;
        setIsDarkTheme(isInMiddle);
        setMenuBackgroundBlack(isInMiddle);
      } else {
        return null;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMenuBackgroundBlack]);
  if (!workItem) {
    return <>Not found</>;
  }
  return (
    <div
      className={`${
        isDarkTheme ? "bg-background-black" : "bg-background-white"
      } transition-colors duration-[1300ms]`}
    >
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
              alt={workItem.title}
              className="w-44 md:w-48"
              src={workItem.projectDetails.projectLogo}
            />
            <a
              href={workItem.projectDetails.projectLink}
              className="text-base leading-none  font-medium underline text-[#006DAA]"
            >
              {workItem.projectDetails.projectLink}
            </a>
          </div>
          <img
            loading="lazy"
            className="mt-2"
            alt="hero"
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
          <section className="padding-y-lg">
            <Brief briefText={briefText} dark={true} />
          </section>
          <div className="flex flex-wrap md:flex-nowrap margin-t gap-6 sm:gap-16 items-center w-full max-w-[1100px]">
            <div className="flex flex-col gap-3 min-w-[350px] md:w-1/2">
              <h2 className="text-base font-semibold uppercase w-fit text-primary-orange-300">
                The Challenge
                <hr className="block w-full h-[0.2rem] mt-1 bg-primary-orange-200"></hr>
              </h2>
              <h3
                className={`${
                  isDarkTheme ? "text-white-shade-200" : "text-black-shade-300"
                } mt-2 text-3xl font-semibold`}
              >
                {workItem.mainContent.challengeContainer.title}
              </h3>
              <p
                className={`${
                  isDarkTheme ? "text-white-shade-200" : "text-black-shade-100"
                } text-lg font-medium leading-relaxed `}
              >
                {workItem.mainContent.challengeContainer.challenge}
              </p>
            </div>
            <figure className="w-full max-w-[500px]">
              <img
                loading="lazy"
                alt="Challenge"
                className="w-full h-auto"
                src={workItem.mainContent.challengeContainer.image}
              />
            </figure>
          </div>
        </div>
      </div>
      {/*---Process---*/}
      <section
        ref={processSectionRef}
        className={`relative transition-colors duration-[1300ms] ${
          isDarkTheme ? "bg-background-black" : "bg-background-white"
        }`}
      >
        <div className="container-margin-compact margin-t padding-y-lg section-layout">
          <div className="sm::mt-24">
            <h2 className="text-base font-semibold uppercase w-fit text-primary-orange-300">
              The Process
              <hr className="w-full border-none h-[0.15rem] mt-1 bg-primary-orange-300" />
            </h2>
            <div className="flex flex-col gap-24 mt-10 mb-10 sm:gap-44 md:gap-48 lg:gap-56 sm:mb-36 md:mb-44">
              {workItem.mainContent.processContainer.map((process, index) => (
                <section
                  className="flex flex-col gap-10 section-class"
                  key={index}
                >
                  <div>
                    <h3
                      className={`${
                        isDarkTheme
                          ? "text-white-shade-200"
                          : "text-black-shade-300"
                      } text-xl font-semibold sm:text-xl md:text-2xl`}
                    >
                      {process.title}
                    </h3>
                    <p
                      className={` ${
                        isDarkTheme
                          ? "text-white-shade-300"
                          : "text-black-shade-300"
                      }
                      mt-4 text-base lg:text-lg max-w-[500px] font-normal `}
                    >
                      {process.description}
                    </p>
                  </div>
                  <div className="relative w-full h-full sm:hidden sm:invisible">
                    <img
                      loading="lazy"
                      decoding="async"
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
          <div className={`sm:block hidden sticky-image-container `}>
            <img
              loading="lazy"
              decoding="async"
              alt="Active section"
              key={activeImage}
              className="relative hidden sm:block z-10 w-full sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[450px] fade-in"
              src={activeImage}
            />
            <svg
              className="absolute z-0 w-full sm:max-w-[240px] md:max-w-[400px] lg:max-w-[580px] fade-out"
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
      <section
        className={`flex transition-all duration-[1300ms] items-center justify-center w-full bg-contain padding-y-lg ${
          isDarkTheme
            ? "bg-textured-black-background"
            : "bg-textured-white-background"
        } margin-t`}
      >
        <div className="max-w-[1000px] container-margin-compact w-full items-center mt-2 flex flex-col gap-1">
          <h2
            className={`self-start text-base font-semibold uppercase w-fit text-primary-orange-300`}
          >
            The End Product
            <hr className="w-full border-none h-[0.15rem] mt-1 bg-primary-orange-300" />
          </h2>
          <p
            className={`${
              isDarkTheme ? "text-white-shade-100" : "text-black-shade-200"
            }  mt-4 transition-colors duration-[1300ms] text-xl sm:text-2xl font-normal`}
          >
            {workItem.mainContent.endProductContainer.description}
          </p>
          <ul
            className={`${
              isDarkTheme ? "text-white-shade-100" : "text-black-shade-200"
            } flex flex-col transition-colors duration-[1300ms]  self-start gap-4 mt-4 sm:mt-6 md:mt-10 `}
          >
            {workItem.mainContent.endProductContainer.points.map(
              (point, index) => (
                <li className="text-lg font-medium sm:text-xl" key={index}>
                  <FontAwesomeIcon color="#00B553" icon={faCheckSquare} />
                  <span className="ml-2">{point}</span>
                </li>
              )
            )}
          </ul>
          <img
            loading="lazy"
            decoding="async"
            alt="project"
            className="mt-8 sm:mt-12 md:mt-16 w-full max-w-[600px]"
            src={workItem.mainContent.endProductContainer.image}
          />
        </div>
      </section>
      <section className="flex justify-center padding-y-lg margin-t container-margin-compact">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h2
            className={`self-start text-base font-semibold uppercase w-fit text-primary-orange-300`}
          >
            The Results
            <hr className="w-full border-none h-[0.15rem] mt-1 bg-primary-orange-300" />
          </h2>
          <p className="mt-4 text-xl font-normal text-black-shade-200 sm:text-2xl">
            {workItem.mainContent.resultContainer.description}
          </p>
          <div className="flex flex-col gap-10 margin-t">
            {workItem.mainContent.resultContainer.media.map((media, index) => (
              <img
                key={index}
                src={media.src}
                alt="result"
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center padding-y-lg bg-background-black">
        <Brief briefText={briefText} dark={false} />
      </section>
    </div>
  );
}
