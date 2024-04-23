"use client";
import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import "./RevolvingCircles.css";
import logos from "@/app/data/techstack";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useGlobalState } from "@/app/utility/globalStateProvide";

const RevolvingCircles = () => {
  const [widthScale, setWidthScale] = useState(1);
  const [orbitScale, setOrbitScale] = useState(1);
  const tsRef = useRef(null);
  const { setMenuBackgroundBlack } = useGlobalState();

  useEffect(() => {
    const handleScroll = () => {
      if (tsRef.current) {
        const topPos = tsRef.current.getBoundingClientRect().top;
        const offset = window.innerHeight / 2; // Middle of the viewport

        const isInMiddle =
          topPos <= offset && topPos >= offset - tsRef.current.offsetHeight;
        setMenuBackgroundBlack(isInMiddle);
      } else {
        return null;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMenuBackgroundBlack]);

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
    <div ref={tsRef} className="bg-cover bg-techstack-background padding-y-lg">
      <h3 className="relative z-10 self-start text-2xl font-semibold leading-snug text-center capitalize container-margin lg:text-4xl md:text-3xl xl:text-5xl text-white-shade-200">
        Technology we excel at
      </h3>
      <div className="solar-system-container">
        <div className="rounded-full w-[50px] sm:w-[80px] lg:w-[90px] central-sun">
          <img src="/techstack/mainCircle.png" alt="Central Tech" />
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
  const initialAngle = initialRotationAngle(index);
  const { rotateZ } = useSpring({
    loop: true,
    from: { rotateZ: initialAngle },
    to: { rotateZ: initialAngle + 360 },
    config: { duration: commonOrbitalDuration },
    reset: true,
  });

  const orbitStyle = {
    transform: rotateZ.to(
      (z) =>
        `rotate(${z}deg) translateX(${scaledOrbitalRadius}px) rotate(-${z}deg)`
    ),
  };
  return (
    <Tippy animation="fade" content={logo.title} placement="auto">
      <animated.div className="rounded-full orbiting-logo" style={orbitStyle}>
        <img
          src={logo.src}
          alt={logo.title}
          style={{ width: `${scaledWidth}px` }}
        />
      </animated.div>
    </Tippy>
  );
};

export default RevolvingCircles;
