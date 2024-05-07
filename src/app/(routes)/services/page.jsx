import React from "react";
import ContactModule from "@/app/components/contactModule/ContactModule";
import Service from "./service";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "From Idea to Impact: Solutions for Dynamic Results",
  description:
    "From Imagination to Implementation: Full-spectrum services for dynamic outcomes. Beamlab. email:info@beamlab.co, Location: Kupondole, Lalitpur, Nepal",
  keywords: [
    "Beamlab",
    "portfolio",
    "work",
    "web development",
    "app development",
    "AI integration",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "From Idea to Impact: Solutions for Dynamic Results",
    description:
      "From Imagination to Implementation: Full-spectrum services for dynamic outcomes. Beamlab. email:info@beamlab.co, Location: Kupondole, Lalitpur, Nepal",
    url: `${websiteUrl}`,
    images: [
      { url: "/OpengraphAlt2.png", width: 1800, height: 1600, alt: "Beamlab" },
      { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
      { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
    ],
  },
};

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <Service />
      <section className="mt-20 sm:mt-28 md:mt-32 lg:mt-36">
        <ContactModule />
      </section>
    </div>
  );
}
