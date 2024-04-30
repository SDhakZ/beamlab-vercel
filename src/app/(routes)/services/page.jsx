import React from "react";
import ContactModule from "@/app/components/contactModule/ContactModule";
import Service from "./service";

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
