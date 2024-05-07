import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Menubar from "./components/menubar/menubar";
import AppFooter from "./components/appFooter/AppFooter";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GlobalStateProvider } from "./utility/globalStateProvide";
import SmoothScrolling from "./SmoothScrolling";
import Providers from "./components/ProgressBarProvider/ProgressBarProvider";

config.autoAddCss = false;
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
export const metadata = {
  title: {
    template: "%s | Beamlab.",
    default: "Crafting Future-Ready Digital Experiences | Beamlab",
  },
  description:
    "Transforming Your Online Presence with Advanced Web Solutions, Mobile Apps, and AI Integration—Strategically Designed to Enhance Visibility, Engage Users, and Drive Growth in Today’s Digital Ecosystem.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: "Crafting Future-Ready Digital Experiences | Beamlab",
    description:
      "Transforming Your Online Presence with Advanced Web Solutions, Mobile Apps, and AI Integration—Strategically Designed to Enhance Visibility, Engage Users, and Drive Growth in Today’s Digital Ecosystem.",
    images: [
      { url: "/OpengraphAlt2.png", width: 1800, height: 1600, alt: "Beamlab" },
      { url: "/Opengraph.png", width: 1200, height: 630, alt: "Beamlab" },
      { url: "/OpengraphAlt.png", width: 800, height: 600, alt: "Beamlab" },
    ],
    url: `${websiteUrl}`,
  },
  manifest: "/site.webmanifest",
};
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const cervino = localFont({
  src: [
    {
      path: "./fonts/Cervino-MediumNeue.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Cervino-SemiBoldNeue.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Cervino-BoldNeue.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Cervino-ExtraBoldNeue.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cervino",
});

export default function RootLayout({ children }) {
  return (
    <GlobalStateProvider>
      <html lang="en">
        <body className={`${poppins.className} ${cervino.variable}`}>
          <Providers>
            <Menubar />
            <SmoothScrolling>
              <div id="main">{children}</div>
            </SmoothScrolling>
            <AppFooter />
          </Providers>
        </body>
      </html>
    </GlobalStateProvider>
  );
}
