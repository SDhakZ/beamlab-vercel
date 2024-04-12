"use client";
import React from "react";
import { useGlobalState } from "@/app/utility/globalStateProvide";

export default function testimonial() {
  const { menuBackgroundBlack } = useGlobalState();

  return (
    <div
      className={`relative duration-[1300ms] pt-14 pb-14 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24 lg:pt-[5.3rem] lg:pb-[10rem] ${
        menuBackgroundBlack
          ? "bg-textured-testimonial-background-dark"
          : "bg-textured-testimonial-background"
      } bg-cover`}
    >
      <div className="relative z-10 mx-8 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-56">
        <svg
          viewBox="0 0 58 46"
          fill="none"
          className="w-4 -ml-4 sm:w-6 sm:-ml-7 md:w-8 md:-ml-10 lg:w-12 lg:-ml-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.992 1.45599L23.256 4.89999C24.0213 5.66533 24.0213 6.59467 23.256 7.688C17.8987 14.6853 15.876 19.824 17.188 23.104C17.516 23.9787 18.172 24.8533 19.156 25.728C20.14 26.4933 21.124 27.1493 22.108 27.696C23.092 28.2427 23.9667 29.1173 24.732 30.32C25.4973 31.5227 25.88 32.9987 25.88 34.748C25.88 36.8253 25.388 38.684 24.404 40.324C23.42 41.964 22.0533 43.276 20.304 44.26C18.664 45.244 16.8053 45.736 14.728 45.736C11.3387 45.736 8.38667 44.424 5.872 41.8C3.46667 39.176 2.04533 35.7867 1.608 31.632C1.17067 27.4773 1.936 22.8307 3.904 17.692C6.41867 11.788 10.4093 6.48533 15.876 1.784C16.532 1.23733 17.024 0.963996 17.352 0.963996C17.68 0.854664 18.2267 1.01866 18.992 1.45599ZM50.644 1.45599L54.744 4.89999C55.6187 5.66533 55.6733 6.59467 54.908 7.688C49.4413 14.6853 47.4187 19.824 48.84 23.104C49.0587 23.9787 49.66 24.8533 50.644 25.728C51.628 26.4933 52.612 27.1493 53.596 27.696C54.58 28.2427 55.4547 29.1173 56.22 30.32C57.0947 31.5227 57.532 32.9987 57.532 34.748C57.532 36.8253 57.04 38.684 56.056 40.324C55.072 41.964 53.7053 43.276 51.956 44.26C50.2067 45.244 48.2933 45.736 46.216 45.736C42.8267 45.736 39.9293 44.424 37.524 41.8C35.1187 39.176 33.6973 35.7867 33.26 31.632C32.8227 27.4773 33.588 22.8307 35.556 17.692C38.0707 11.788 42.0067 6.48533 47.364 1.784C48.1293 1.23733 48.676 0.963996 49.004 0.963996C49.332 0.854664 49.8787 1.01866 50.644 1.45599Z"
            fill="#FE9600"
          />
        </svg>
        <h3
          className={`text-2xl relative duration-[1300ms] font-semibold sm:text-3xl md:text-4xl ${
            menuBackgroundBlack
              ? "text-white-shade-200"
              : "text-black-shade-300"
          }`}
        >
          <span className="gradient-x">Voices Of Satisfaction:</span> Feedback
          left by our valued client{" "}
        </h3>
        <p
          className={`mt-5 text-lg duration-[1300ms] font-medium tracking-wide max-w-[1200px] leading-relaxed ${
            menuBackgroundBlack
              ? "text-white-shade-200"
              : "text-black-shade-100"
          } md:mt-7 `}
        >
          &quot;Working with the team was transformative for our business. Their
          communication was exceptional, making us feel connected at every step.
          The designs they delivered not only wowed us but also perfectly
          aligned with our brand, receiving rave reviews from our customers.
          They&apos;ve redefined excellence for us, and we&apos;re excited for
          what&apos;s next in our partnership.&quot;
        </p>
        <p
          className={`mt-5 text-lg duration-[1300ms] font-medium font-manrope ${
            menuBackgroundBlack
              ? "text-white-shade-200"
              : "text-black-shade-100"
          } `}
        >
          Amulya Bajracharya
        </p>
      </div>
      <picture>
        {/* Small Image */}
        <source
          media="(max-width: 540px)"
          srcSet="/testimonialArtifactSM.png"
        />
        <img
          alt="artifact"
          aria-hidden="true"
          className="absolute bottom-0 bg-opacity-95"
          src={
            menuBackgroundBlack
              ? "/testimonialArtifactDark.png"
              : "/testimonialArtifact.png"
          }
        />
      </picture>
    </div>
  );
}
