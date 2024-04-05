import React from "react";
import WorkDetail from "./workDetail";
import workData from "@/app/data/work";
import ContactModule from "@/app/components/contactModule/ContactModule";

export function generateStaticParams() {
  const workSlugs = workData.map((work) => ({
    workSlug: work.slug,
  }));

  return workSlugs;
}

export default function page() {
  return (
    <>
      <WorkDetail />
      <ContactModule />
    </>
  );
}
