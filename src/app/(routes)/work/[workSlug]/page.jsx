import React from "react";
import WorkDetail from "./workDetail";
import workData from "@/app/data/work";
import ContactModule from "@/app/components/contactModule/ContactModule";
import NotFound from "@/app/not-found";

export function generateStaticParams() {
  const workSlugs = workData.map((work) => ({
    workSlug: work.slug,
  }));

  return workSlugs;
}

export async function generateMetadata({ params }) {
  // read route params
  const workSlug = params.workSlug;
  const workItem = workData.find((item) => item.slug === workSlug);
  if (!workItem) {
    return <NotFound />;
  }
  const { title, tags, mainContent } = workItem;

  const optimizedDescription =
    mainContent.briefContainer.brief.length < 230
      ? mainContent.briefContainer.brief +
        "Email: info@beamlab.co, Location: Kupondole, Lalitpur, Nepal"
      : mainContent.briefContainer.brief;

  return {
    title: `${title} Work Case Study`,
    description: `${optimizedDescription}`,
    keywords: ["Beamlab", "Portfolio", tags, title],
    alternates: {
      canonical: `/work/${workSlug}`,
    },
  };
}

export default function page() {
  return (
    <>
      <WorkDetail />
      <ContactModule />
    </>
  );
}
