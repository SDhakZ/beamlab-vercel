import React from "react";
import ServiceDetail from "./serviceDetail";
import { serviceData } from "@/app/data/service";

export function generateStaticParams() {
  const serviceSlugs = serviceData.map((service) => ({
    serviceSlug: service.slug,
  }));

  return serviceSlugs;
}

export default function page() {
  return (
    <div>
      <ServiceDetail />
    </div>
  );
}
