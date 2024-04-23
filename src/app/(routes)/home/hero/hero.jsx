import Link from "next/link";
import React from "react";
import "./hero.css";

export default function home() {
  return (
    <section className="min-h-[60vh] lg:min-h-[66vh] xl:min-h-[86vh] flex h-full items-center justify-center container-margin">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <h1 className="lg:text-6xl text-5xl md:text-5xl xl:text-8xl leading-[1.12] font-semibold sm:leading-[1.13] md:leading-[1.13] lg:leading-[1.13] xl:leading-[1.15] text-center font-cervino md:max-w-[900px] lg:max-w-[1000px] text-black-shade-300">
          Crafting Ideas,{" "}
          <ul className="inline flicker w-fit">
            <li className="inline">I</li>
            <li className="inline">g</li>
            <li className="inline">n</li>
            <li className="inline">i</li>
            <li className="inline">t</li>
            <li className="inline">i</li>
            <li className="inline">n</li>
            <li className="inline">g</li>
          </ul>{" "}
          Code: Welcome to beamlab
          <span className="text-primary-orange-300">.</span>
        </h1>
        <p className="text-lg md:text-xl sm:max-w-[500px] font-medium md:max-w-[700px] text-center leading-relaxed text-black-shade-100">
          Got an idea itching to be coded? Let's make it happen! Click down
          below to reach out and let's get started.
        </p>
        <Link
          href="/contact"
          className="text-base font-medium border-2 rounded-full md:text-lg shiny "
        >
          Get a quote
        </Link>
      </div>
    </section>
  );
}
