import React from "react";
import About from "./about";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
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
  openGraph: {
    title: "Discover Our Visions and Goals",
    description:
      "At BeamLab, we are committed to creating digital experiences that empower brands and drive growth. Learn more about our vision and mission here.",
    images: [
      { url: "/OpengraphAlt2.png", width: 1800, height: 1600, alt: "Beamlab" },
      { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
      { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
    ],
    url: `${websiteUrl}/about`,
  },
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
