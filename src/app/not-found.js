"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useGlobalState } from "@/app/utility/globalStateProvide";

export default function NotFound() {
  const { setMenuBackgroundBlack } = useGlobalState();
  const videoRef = useRef(null);

  // useEffect to handle autoplay delay
  useEffect(() => {
    // Set menu background to black when page loads
    setMenuBackgroundBlack(true);

    // Delayed autoplay for video
    const timer = setTimeout(() => {
      if (videoRef.current && !videoRef.current.playing) {
        videoRef.current.play();
      }
    }, 5000); // Delay in milliseconds

    return () => {
      clearTimeout(timer); // Cleanup the timer
      // Reset menu background to default when leaving the page
      setMenuBackgroundBlack(false);
    };
  }, []);
  return (
    <div className="relative bg-[#010101]">
      <div className="relative flex flex-col items-center min-h-[90vh] justify-center item-center">
        <video
          muted
          className="w-[550px] opacity-80"
          loop
          autoPlay
          ref={videoRef}
        >
          <source src="/not-found.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute flex flex-col items-center top-[52%]">
          <h1 className="text-white-shade-200">
            <span className="text-2xl">404</span> Error, page not found
          </h1>
          <Link
            className="items-center px-6 py-2 mt-5 text-center transition-all duration-100 bg-transparent rounded-full glow-effect w-fit text-primary-orange-100 outline outline-2"
            href="/"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
