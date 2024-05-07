import React from "react";
import Work from "./work";
import Carousel from "@/app/components/partnerCarousel/Carousel";
import ContactModule from "@/app/components/contactModule/ContactModule";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
export const metadata = {
  title: "Our Diverse Range of Work",
  description:
    "Explore Our Diverse Work: A Showcase of Creativity, Innovation, and Success Stories. Email: info@beamlab.co, Location: Kupondole, Lalitpur, Nepal ",
  keywords: [
    "Beamlab",
    "portfolio",
    "work",
    "web development",
    "app development",
    "AI integration",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Diverse Range of Work",
    description:
      "Explore Our Diverse Work: A Showcase of Creativity, Innovation, and Success Stories. Email: info@beamlab.co, Location: Kupondole, Lalitpur, Nepal",
    images: [
      { url: "/OpengraphAlt2.png", width: 1800, height: 1600, alt: "Beamlab" },
      { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
      { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
    ],
    url: `${websiteUrl}/work`,
  },
};

export default function page() {
  return (
    <>
      <section>
        <Work />
      </section>
      <section className="mt-16">
        <Carousel />
      </section>
      <ContactModule />
    </>
  );
}
