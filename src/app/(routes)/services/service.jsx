import React from "react";
import "./service.css";
import Link from "next/link";
import { serviceData } from "../../data/service";

export default function service() {
  return (
    <div className="">
      <section className="top-section-p container-margin ">
        <h1 className="text-2xl font-medium leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          From <span className="gradient">Imagination</span> to{" "}
          <span className="gradient">Implementation</span>: Full-spectrum
          services for dynamic outcomes
        </h1>
      </section>
      <section className="mt-10 lg:mt-20 md:mt-16 sm:mt-12 container-margin ">
        <div className="flex flex-wrap gap-x-6 gap-y-16 justify-evenly">
          {serviceData.map((service, index) => (
            <Link key={index} href={service.href} className="square twitter">
              <span></span>
              <span></span>
              <span></span>
              <div className="flex flex-col items-center content">
                <img
                  className="w-full -mt-6 max-w-[100px] default-image"
                  src={service.images.default}
                />
                <img
                  className="w-full hidden -mt-6 max-w-[100px] hover-image"
                  src={service.images.hover}
                />
                <h2 className="mt-2 text-xl font-semibold leading-tight blob-h2">
                  {service.title}
                </h2>
                <p className="mt-1 blob-para">{service.brief}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
