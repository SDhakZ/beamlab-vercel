"use client";
import React from "react";
import "./service.css";
import Link from "next/link";
import { serviceData } from "../../data/service";
import { motion } from "framer-motion";

export default function service() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // Delay in seconds between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative">
      <section className="top-section-p container-margin">
        <h1 className="text-2xl font-semibold text-black-shade-300 lg:leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          From <span className="gradient">Imagination</span> to{" "}
          <span className="gradient">Implementation</span>: Full-spectrum
          services for dynamic outcomes
        </h1>
      </section>
      <section className="mt-10 lg:mt-20 md:mt-16 sm:mt-12 container-margin ">
        <motion.div
          className="flex flex-wrap gap-x-6 gap-y-16 justify-evenly"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {serviceData.map((service, index) => (
            <motion.a
              key={index}
              href={`/services/${service.slug}`}
              className="square twitter"
              variants={itemVariants}
            >
              <span></span>
              <span></span>
              <span></span>
              <div className="flex flex-col items-center content">
                <img
                  className="w-full -mt-6 max-w-[90px] sm:max-w-[100px] default-image"
                  src={service.images.default}
                />
                <img
                  className="w-full hidden -mt-6 max-w-[90px] sm:max-w-[100px] hover-image"
                  src={service.images.hover}
                />
                <h2 className="mt-2 text-xl font-semibold leading-tight blob-h2">
                  {service.title}
                </h2>
                <p className="mt-1 text-black-shade-300 blob-para">
                  {service.brief}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
