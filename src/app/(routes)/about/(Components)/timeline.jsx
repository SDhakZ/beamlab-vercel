"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import "./timeline.css";
import { TimelineData } from "@/app/data/timeline";
import { useGlobalState } from "@/app/utility/globalStateProvide";

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
        {TimelineData.map((data, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });

          return (
            <div ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#282828",
                  color: "#636363",

                  boxShadow: "none",
                }}
                contentArrowStyle={{ borderRight: "7px solid #FFFFFF" }}
                dateClassName={"date-timeline"}
                date={data.date}
                visible={inView}
                layout="2-columns"
                iconStyle={{
                  background: data.selected ? "#F5B331" : "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={data.icon ? data.icon : <TickIcon />}
              >
                <div key={index}>
                  <h3 className="vertical-timeline-element-title">
                    {data.title}
                  </h3>
                  {data.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {data.subtitle}
                    </h4>
                  )}
                  <p>{data.description}</p>
                </div>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
      <div className="flex items-center justify-center margin-t container-margin">
        <p className="text-center text-white-shade-200  w-full max-w-[900px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
