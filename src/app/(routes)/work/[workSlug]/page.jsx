import React from "react";
import WorkDetail from "./workDetail";
import workData from "@/app/data/work";
import ContactModule from "@/app/components/contactModule/ContactModule";
import NotFound from "@/app/not-found";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
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
  const { title, tags, mainContent, catchPhrase } = workItem;

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
    openGraph: {
      title: `${catchPhrase}:${title} - Beamlab.`,
      description: `${optimizedDescription}`,
      images: [
        {
          url: "/OpengraphAlt2.png",
          width: 1800,
          height: 1600,
          alt: "Beamlab",
        },
        { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
        { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
      ],
      url: `${websiteUrl}/work/${workSlug}`,
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
