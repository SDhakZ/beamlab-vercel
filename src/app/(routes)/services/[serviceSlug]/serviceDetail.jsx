"use client";
import { serviceData } from "@/app/data/service";
import { useParams } from "next/navigation";
import HeroSection from "../(Components)/heroSection";
import OfferSection from "../(Components)/offerSection";
import FeatureSection from "../(Components)/featureSection";
import Testimonial from "@/app/components/testimonial/testimonial";
import Carousel from "@/app/components/partnerCarousel/Carousel";
import "./serviceDetail.css";
import Recommend from "@/app/components/recommend/recommend";
import ContactModule from "@/app/components/contactModule/ContactModule";

export default function ServiceDetail() {
  const params = useParams();
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
      <Carousel />
      <Recommend />
      <ContactModule />
    </div>
  );
}
