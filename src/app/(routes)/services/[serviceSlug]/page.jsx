import { serviceData } from "@/app/data/service";
import ServiceDetail from "./serviceDetail";
import NotFound from "@/app/not-found";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export function generateStaticParams() {
  const serviceSlugs = serviceData.map((service) => ({
    serviceSlug: service.slug,
  }));

  if (!serviceSlugs) {
    return <NotFound />;
  }

  return serviceSlugs;
}

export async function generateMetadata({ params }) {
  // read route params
  const serviceSlug = params.serviceSlug;
  const serviceItem = serviceData.find((item) => item.slug === serviceSlug);

  if (!serviceItem || !serviceSlug) {
    return <NotFound />;
  }
  const { title, brief } = serviceItem;

  const optimizedDescription =
    brief < 230
      ? brief + "Email: info@beamlab.co, Location: Kupondole, Lalitpur, Nepal"
      : brief;

  return {
    title: `${title} - Service`,
    description: `${optimizedDescription}`,
    keywords: ["Beamlab", "Portfolio", title],
    alternates: {
      canonical: `/services/${serviceSlug}`,
    },
    openGraph: {
      title: `${title}:${brief} - Beamlab.`,
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
      url: `${websiteUrl}/services/${serviceSlug}`,
    },
  };
}

export default function page({ params }) {
  const serviceSlug = params.serviceSlug;
  const serviceItem = serviceData.find((item) => item.slug === serviceSlug);

  return serviceItem ? (
    <div>
      <ServiceDetail />
    </div>
  ) : (
    <NotFound />
  );
}
