import React from "react";
import Work from "./work";
import Carousel from "@/app/components/partnerCarousel/Carousel";

export default function page() {
  return (
    <>
      <Work />
      <section>
        <Carousel />
      </section>
    </>
  );
}
