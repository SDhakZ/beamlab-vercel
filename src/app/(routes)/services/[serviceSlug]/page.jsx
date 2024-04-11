import { serviceData } from "@/app/data/service";
import HeroSection from "../(Components)/heroSection";
import OfferSection from "../(Components)/offerSection";
import FeatureSection from "../(Components)/featureSection";
import Testimonial from "@/app/components/testimonial/testimonial";
import "./serviceDetail.css";

export function generateStaticParams() {
  const serviceSlugs = serviceData.map((service) => ({
    serviceSlug: service.slug,
  }));

  return serviceSlugs;
}

export default function page({ params }) {
  const serviceSlug = params.serviceSlug;
  const selectedServiceData = serviceData.find(
    (service) => service.slug === serviceSlug
  );
  return (
    <div>
      <HeroSection selectedServiceData={selectedServiceData} />
      <OfferSection selectedServiceData={selectedServiceData} />
      <Testimonial />
      <FeatureSection selectedServiceData={selectedServiceData} />
    </div>
  );
}
