import React from "react";
import WorkDetail from "./workDetail";
import workData from "@/app/data/work";

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
    </>
  );
}
