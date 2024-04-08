"use client";
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, unit, alignStart, darkMode }) {
  return (
    <div
      className={`flex flex-col items-center w-full gap-2 ${
        alignStart ? "sm:items-start" : ""
      }`}
    >
      <div
        className={`text-4xl font-semibold sm:text-4xl md:text-4xl lg:text-5xl ${
          darkMode ? "text-white-shade-200" : "text-black-shade-300"
        }`}
      >
        <CountUp
          duration={4}
          start={0}
          end={number ? number : null}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
        <span>{unit}</span>
      </div>

      <p
        className={`text-base font-medium uppercase ${
          darkMode ? "text-white-shade-200" : "text-black-shade-300"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
