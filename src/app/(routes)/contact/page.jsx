import React from "react";
import Contact from "./contact";

const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;

export const metadata = {
  title: "Drop us a line for your inquiries",
  description:
    "Get in Touch: Drop us a line for your inquiries. Email us at info@beamlab.co, located at Kupondole, Lalitpur, Nepal",
  keywords: [
    "Beamlab",
    "contact",
    "contact us",
    "web development",
    "app development",
    "AI integration",
  ],
  alternates: {
    canonical: "/work",
  },
};

export default function page() {
  return (
    <div>
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
    </div>
  );
}
