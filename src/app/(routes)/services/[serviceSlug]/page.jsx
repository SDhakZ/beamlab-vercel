import { serviceData } from "@/app/data/service";
import ServiceDetail from "./serviceDetail";

export function generateStaticParams() {
  const serviceSlugs = serviceData.map((service) => ({
    serviceSlug: service.slug,
  }));

  return serviceSlugs;
}

export default function page({ params }) {
  return (
    <div>
      <ServiceDetail />
    </div>
  );
}
