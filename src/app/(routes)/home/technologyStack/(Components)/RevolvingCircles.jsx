import React from "react";
import { animated, useSpring } from "@react-spring/web";
import "./RevolvingCircles.css";
import logos from "@/app/data/techstack";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const RevolvingCircles = () => {
  return (
    <div className="solar-system-container margin-t padding-y-lg">
      <h3 className="relative z-10 self-start text-5xl font-semibold capitalize text-white-shade-200">
        Technology we excel at
      </h3>

      <div className="rounded-full central-sun">
        <img src="/techstack/mainCircle.png" alt="Central Tech" />
      </div>

      {logos.map((logo, index) => (
        <OrbitingLogo key={logo.id} logo={logo} index={index} />
      ))}
    </div>
  );
};
const commonOrbitalDuration = 55000;
const initialRotationAngle = (index) => (index / logos.length) * 690;
const OrbitingLogo = ({ logo, index }) => {
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
        `rotate(${z}deg) translateX(${logo.orbitalRadius}px) rotate(-${z}deg)`
    ),
  };

  return (
    <Tippy animation="fade" content={logo.title} placement="auto">
      <animated.div className="rounded-full orbiting-logo" style={orbitStyle}>
        <img
          src={logo.src}
          alt={`Logo ${logo.id}`}
          style={{ width: logo.width }}
        />
      </animated.div>
    </Tippy>
  );
};

export default RevolvingCircles;
