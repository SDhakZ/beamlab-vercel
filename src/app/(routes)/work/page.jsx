import React from "react";
import Work from "./work";
import Carousel from "@/app/components/partnerCarousel/Carousel";
import ContactModule from "@/app/components/contactModule/ContactModule";

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
