import React from "react";
import Contact from "./contact";
const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "Drop us a line for your inquiries",
  description:
    "Get in Touch: Drop us a line for your inquiries. Email us at info@beamlab.co, located at Kupondole, Lalitpur, Nepal | Beamlab.",
  keywords: [
    "Beamlab",
    "contact",
    "contact us",
    "web development",
    "app development",
    "AI integration",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Beamlab",
    description:
      "Get in Touch: Drop us a line for your inquiries. Email us at info@beamlab.co, located at Kupondole, Lalitpur, Nepal",
    images: [
      { url: "/OpengraphAlt2.png", width: 1800, height: 1600, alt: "Beamlab" },
      { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
      { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
    ],
    url: `${websiteUrl}/contact`,
  },
};

export default function page() {
  return (
    <div>
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
    </div>
  );
}
