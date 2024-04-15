"use client";
import React, { useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import "./timeline.css";
import { TimelineData } from "@/app/data/timeline";
import { useGlobalState } from "@/app/utility/globalStateProvide";
import TimelineElement from "./timelineElement";

export default function Timeline() {
  const { setMenuBackgroundBlack } = useGlobalState();
  const timelineSection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineSection.current) {
        const topPos = timelineSection.current.getBoundingClientRect().top;
        const offset = window.innerHeight / 2; // Middle of the viewport
        const isInMiddle =
          topPos <= offset &&
          topPos >= offset - timelineSection.current.offsetHeight;

        setMenuBackgroundBlack(isInMiddle);
      } else {
        return null;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMenuBackgroundBlack]);

  return (
    <div ref={timelineSection}>
      <VerticalTimeline>
        {TimelineData.map((data, index) => (
          <TimelineElement key={index} data={data} />
        ))}
      </VerticalTimeline>
      <div className="flex items-center justify-center margin-t container-margin">
        <p className="text-center text-white-shade-200  w-full max-w-[900px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
