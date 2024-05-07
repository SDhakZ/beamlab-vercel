import React from "react";
import ContactModule from "@/app/components/contactModule/ContactModule";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "Terms and Conditions",
  description:
    "These terms of service and disclaimer govern your use of the Beamlab website and any content, features, or services made available through the website.",
  keywords: ["Beamlab", "terms and conditions", "policy"],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and conditions | Beamlab",
    description:
      "These terms of service and disclaimer govern your use of the Beamlab website and any content, features, or services made available through the website.",
    images: [
      { url: "/OpengraphAlt2.png", width: 1800, height: 1600, alt: "Beamlab" },
      { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
      { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
    ],
    url: `${websiteUrl}/terms-and-conditions`,
  },
};

export default function page() {
  return (
    <div className="">
      <div className="margin-t container-margin-compact">
        <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl">
          Terms and conditions
        </h1>
      </div>
      <div className="flex flex-col gap-10 padding-y-lg container-margin-compact">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300">
            Purpose
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            These terms of service and disclaimer govern your use of the Beamlab
            website and any content, features, or services made available
            through the website.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Disclaimer of Liability
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            We do not guarantee the accuracy or completeness of our
            website&apos;s content, and we are not liable for any errors or
            omissions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Limitations of Liability
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            We will not be liable for any damages, whether direct, indirect,
            incidental, or consequential, resulting from your use of our website
            or any of its content, features, or services.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Expectations for User Behavior
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            You agree not to use our website for any illegal or unauthorized
            purpose, and you agree to follow all applicable laws and
            regulations.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Intellectual Property
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            Our website&apos;s content and materials are all free to use.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            User-Generated Content or Submissions
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            You grant us a non-exclusive, royalty-free license to use, modify,
            and distribute the content in any form or medium by submitting
            content to our website.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Changes to the Terms of Use and Disclaimer
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            We reserve the right, at any time, to modify or update these terms
            of use and disclaimer, and your continued use of our website
            following any such changes constitutes acceptance of the new terms.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Agreement to the Terms of Use and Disclaimer
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            You agree to be bound by these terms of use and disclaimer, as well
            as any other applicable laws and regulations, by accessing or using
            our website.
          </p>
        </div>
      </div>
      <section className="mt-8">
        <ContactModule />
      </section>
    </div>
  );
}
