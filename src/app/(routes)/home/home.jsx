"use client";
import Hero from "../../(routes)/home/hero/hero";
import Offer from "../../(routes)/home/offerSection/offer";
import ProjectJourney from "../../(routes)/home/projectJourney/projectJourney";
import Evidence from "../../(routes)/home/evidenceSection/evidence";
import { useGlobalState } from "../../utility/globalStateProvide";
import Carousel from "@/app/components/partnerCarousel/Carousel";
import Technology from "./technologyStack/technology";
import React, { useRef, useEffect } from "react";
import Contact from "../contact/contact";
import SmoothScrolling from "@/app/SmoothScrolling";

export default function Home(props) {
  const { setMenuBackgroundBlack, menuBackgroundBlack } = useGlobalState();
  const { hcaptcha_site_key } = props;
  const pjRef = useRef(null);
  const tsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let isInMiddle = false;

      // Check if ProjectJourney is in the middle of the viewport
      if (pjRef && pjRef.current) {
        const topPosPJ = pjRef.current.getBoundingClientRect().top;
        const offset = window.innerHeight / 2;
        isInMiddle =
          topPosPJ <= offset && topPosPJ >= offset - pjRef.current.offsetHeight;
      }

      // Check if TechnologyStack is in the middle of the viewport
      if (tsRef && tsRef.current && !isInMiddle) {
        // Only check if not already set by ProjectJourney
        const topPosTS = tsRef.current.getBoundingClientRect().top;
        const offset = window.innerHeight / 2;
        isInMiddle =
          topPosTS <= offset && topPosTS >= offset - tsRef.current.offsetHeight;
      }

      setMenuBackgroundBlack(isInMiddle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pjRef, tsRef, setMenuBackgroundBlack]);

  return (
    <div
      className={`transition-colors duration-[1300ms] ${
        menuBackgroundBlack ? "bg-background-black" : "bg-background-white"
      } `}
    >
      <Hero />
      <Offer />
      <ProjectJourney ref={pjRef} />
      <Evidence />
      <Carousel />
      <Technology ref={tsRef} />
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
    </div>
  );
}
