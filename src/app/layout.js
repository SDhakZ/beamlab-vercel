import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en">
      <body className={`${poppins.className} ${cervino.variable}`}>
        {children}
      </body>
    </html>
  );
}
