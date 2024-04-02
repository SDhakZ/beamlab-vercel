"use client";
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, unit }) {
  return (
    <div className="flex flex-col items-center w-full gap-2 sm:items-start">
      <div className="text-4xl font-semibold sm:text-4xl md:text-5xl text-black-shade-300">
        <CountUp
          duration={4}
          start={0}
          end={number ? number : null}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
        <span>{unit}</span>
      </div>

      <p className="text-base font-medium uppercase text-black-shade-200">
        {title}
      </p>
    </div>
  );
}
