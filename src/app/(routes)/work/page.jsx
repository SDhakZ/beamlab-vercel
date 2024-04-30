import React from "react";
import Work from "./work";
import Carousel from "@/app/components/partnerCarousel/Carousel";
import ContactModule from "@/app/components/contactModule/ContactModule";

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
