import { serviceData } from "@/app/data/service";
import ServiceDetail from "./serviceDetail";

export function generateStaticParams() {
  const serviceSlugs = serviceData.map((service) => ({
    serviceSlug: service.slug,
  }));

  return serviceSlugs;
}

export async function generateMetadata({ params }) {
  // read route params
  const serviceSlug = params.serviceSlug;
  const serviceItem = serviceData.find((item) => item.slug === serviceSlug);
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
  };
}

export default function page() {
  return (
    <div>
      <ServiceDetail />
    </div>
  );
}
