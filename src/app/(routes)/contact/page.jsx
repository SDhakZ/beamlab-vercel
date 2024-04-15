import React from "react";
import Contact from "./contact";

const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;

export default function page() {
  return (
    <div>
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
    </div>
  );
}
