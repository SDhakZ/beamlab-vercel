"use client";
import React, { useState, useEffect } from "react";
import "./RevolvingCircles.css";
import logos from "@/app/data/techstack";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  LazyMotion,
  m,
  domAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const RevolvingCircles = () => {
  const [widthScale, setWidthScale] = useState(1);
  const [orbitScale, setOrbitScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      let orbitScaleDown = 1;
      let widthScaleDown = 1;
      if (window.innerWidth < 540) {
        orbitScaleDown = 0.5;
        widthScaleDown = 0.7;
      } else if (window.innerWidth < 768) {
        orbitScaleDown = 0.7;
        widthScaleDown = 0.6;
      }
      setOrbitScale(orbitScaleDown);
      setWidthScale(widthScaleDown);
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="bg-cover bg-techstack-background padding-y-lg">
      <h3 className="relative z-10 self-start text-3xl font-semibold leading-snug text-center capitalize container-margin lg:text-4xl md:text-3xl xl:text-5xl text-white-shade-200">
        Technology we excel at
      </h3>
      <div className="solar-system-container">
        <div className="rounded-full w-[50px] sm:w-[80px] lg:w-[100px] central-sun">
          <img
            src="/techstack/mainCircle.webp"
            title="beamlab"
            alt="Central Tech"
          />
        </div>

        {logos.map((logo, index) => (
          <OrbitingLogo
            key={logo.id}
            logo={logo}
            index={index}
            widthScale={widthScale}
            orbitScale={orbitScale}
          />
        ))}
      </div>{" "}
    </div>
  );
};
const commonOrbitalDuration = 55000;
const initialRotationAngle = (index) => (index / logos.length) * 690;

const OrbitingLogo = ({ logo, index, widthScale, orbitScale }) => {
  const scaledOrbitalRadius = logo.orbitalRadius * orbitScale;
  const scaledWidth = parseInt(logo.width, 10) * widthScale;

  // Initialize the rotation angle based on index
  const initialAngle = initialRotationAngle(index);

  // Framer Motion rotation values
  const rotateZ = useMotionValue(initialAngle);

  useEffect(() => {
    // Ensure animate rotates from initialAngle to initialAngle + 360
    const controls = animate(rotateZ, initialAngle + 360, {
      type: "tween",
      duration: commonOrbitalDuration / 1000,
      repeat: Infinity, // Use repeat: Infinity for endless loop
      ease: "linear",
    });

    // Cleanup function to stop the animation on unmount
    return () => controls.stop();
  }, [rotateZ, initialAngle]); // Include all dependencies correctly

  const orbitStyle = useTransform(
    rotateZ,
    (z) =>
      `rotate(${z}deg) translateX(${scaledOrbitalRadius}px) rotate(-${z}deg)`
  );

  return (
    <LazyMotion features={domAnimation}>
      <Tippy animation="fade" content={logo.title} placement="auto">
        <m.div
          className="rounded-full orbiting-logo"
          style={{ transform: orbitStyle, width: `${scaledWidth}px` }}
          transition={{ repeat: Infinity }}
        >
          <img
            src={logo.src}
            alt={logo.title}
            style={{ width: `${scaledWidth}px` }}
          />
        </m.div>
      </Tippy>
    </LazyMotion>
  );
};

export default RevolvingCircles;
