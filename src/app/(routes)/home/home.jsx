"use client";
import Hero from "../../(routes)/home/hero/hero";
import Offer from "../../(routes)/home/offerSection/offer";
import ProjectJourney from "../../(routes)/home/projectJourney/projectJourney";
import Evidence from "../../(routes)/home/evidenceSection/evidence";
import { useGlobalState } from "../../utility/globalStateProvide";

export default function Home() {
  const { menuBackgroundBlack } = useGlobalState();
  return (
    <div
      className={`transition-colors duration-[1300ms] ${
        menuBackgroundBlack ? "bg-background-black" : "bg-background-white"
      }`}
    >
      <Hero />
      <Offer />
      <ProjectJourney />
      <Evidence />
    </div>
  );
}