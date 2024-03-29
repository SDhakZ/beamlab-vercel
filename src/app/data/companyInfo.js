import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const menuData = [
  {
    title: "Company",
    items: [
      { title: "Home", link: "/" },
      { title: "Services", link: "/services" },
      { title: "Work", link: "/work" },
      { title: "About", link: "/about" },
      { title: "Contact", link: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "App Development", link: "/services/app-development" },
      { title: "Web development", link: "/services/web-development" },
      { title: "AI Integrations", link: "/services/ai-integrations" },
    ],
  },
  {
    title: "Others",
    items: [
      { title: "Sitemap", link: "/sitemap.xml" },
      { title: "Terms & Conditions", link: "/terms-and-conditions" },
    ],
  },
  {
    title: "Contacts",
    items: [
      {
        title: "info@beamlab.co",
        link: "mailto:info@beamlab.co",
        icon: faEnvelope,
      },
      {
        title: "Kupondole, Lalitpur, Nepal",
        link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
        icon: faLocationDot,
      },
    ],
  },
];

export const socialInfo = [
  {
    icon: faInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/twelveletter.company",
    color: "#E1306C",
  },
  {
    icon: faLinkedinIn,
    title: "Linkedin",
    link: "https://www.linkedin.com/company/79433400/",
    color: "#0a66c2",
  },
  {
    icon: faFacebookF,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61554349688894",
    color: "#316FF6",
  },
  {
    icon: faTiktok,
    title: "Tiktok",
    link: "https://www.tiktok.com/@twelveletter.co?_t=8ju1IwyaRcI&_r=1",
    color: "#000",
  },
];
