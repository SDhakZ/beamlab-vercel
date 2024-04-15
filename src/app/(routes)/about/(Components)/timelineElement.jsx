import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const TickIcon = () => (
  <i className="mt-2 text-base md:md:text-lg">
    <FontAwesomeIcon icon={faBriefcase} />
  </i>
);

const TimelineElement = ({ data }) => {
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
        <div>
          <h3 className="vertical-timeline-element-title">{data.title}</h3>
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
};

export default TimelineElement;
