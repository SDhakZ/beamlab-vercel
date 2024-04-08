import React from "react";
import ContactModule from "@/app/components/contactModule/ContactModule";

import Service from "./service";

export default function page() {
  return (
    <div className="min-h-screen">
      <Service />
      <section className="mt-20 sm:mt-28 md:mt-32 lg:mt-36">
        <ContactModule />
      </section>
    </div>
  );
}
