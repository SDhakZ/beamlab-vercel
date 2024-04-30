import React from "react";
import About from "./about";

export const metadata = {
  title: "Discover Our Visions and Goals",
  description:
    "At BeamLab, we are committed to creating digital experiences that empower brands and drive growth. Learn more about our vision and mission here.",
  keywords: [
    "Beamlab",
    "digital experiences",
    "website building",
    "app development",
    "vision and mission",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
