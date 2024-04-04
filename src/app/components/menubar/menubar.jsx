"use client";
import React, { useState, useEffect } from "react";
import FullscreenMenu from "./fullscreenMenu";
import "./menubar.css";
import Link from "next/link";
import { useGlobalState } from "@/app/utility/globalStateProvide";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { menuBackgroundBlack } = useGlobalState();
  const toggleActive = () => setIsActive(!isActive);
  useEffect(() => {
    // Immediately check and apply the correct menu bar state based on scroll position
    const initialHandleScroll = () => {
      const scrollY = window.scrollY;
      setHasShadow(scrollY > 0);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasShadow(scrollY > 0);
      // Optionally, save scroll position to localStorage if needed
      localStorage.setItem("scrollY", scrollY.toString());
    };

    // Call handleScroll immediately to set the initial state correctly
    initialHandleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    if (!isOpen) {
      setShowMenu(true); // Show menu with fade-in effect
      setTimeout(() => setIsOpen(true), 0); // Delay state update slightly to ensure CSS applies
    } else {
      setIsOpen(false); // Start fade-out effect
      setTimeout(() => setShowMenu(false), 500); // Wait for fade-out to complete before removing
    }
    setIsActive(!isActive);
  };
  useEffect(() => {
    const mainElement = document.getElementById("main");
    const footer = document.getElementById("footer");

    if (isOpen) {
      mainElement.style.display = "none";
      footer.style.display = "none";
    } else {
      mainElement.style.display = "";
      footer.style.display = "";
    }
  }, [isOpen]);

  return (
    <nav
      style={{
        backgroundColor: isOpen
          ? "#F5F5F7"
          : hasShadow
          ? menuBackgroundBlack
            ? "#121212"
            : "#F5F5F7"
          : "transparent",
        boxShadow: hasShadow
          ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
          : "none",
        zIndex: 1000,
      }}
      className={`flex sticky justify-between transition-color duration-[1300ms] items-center top-0 w-full h-20 lg:h-24`}
    >
      <div className="flex items-center justify-between w-full h-full container-margin">
        {/*    <a href="/" className="w-[150px]">
          <img alt="Beamlab" src="./BrandLogo.png" />
        </a> */}
        <Link
          href="/"
          className={`${
            isOpen
              ? "text-black-shade-300"
              : hasShadow
              ? menuBackgroundBlack
                ? "text-white-shade-100"
                : "text-black-shade-300"
              : "text-black-shade-300"
          } text-4xl font-bold cursor-pointer font-cervino`}
        >
          beamlab<span className="text-primary-orange-300">.</span>
        </Link>
        <div
          className={`w-[75px] -mt-[3px] burger cursor-pointer float-end container ${
            isOpen ? "active" : ""
          }`}
          onClick={handleMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="95"
            viewBox="0 0 200 200"
          >
            <g strokeWidth="6.5" strokeLinecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke={
                  isOpen
                    ? "#3F3F3F"
                    : hasShadow
                    ? menuBackgroundBlack
                      ? "#fff"
                      : "#3F3F3F"
                    : "#3F3F3F"
                }
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke={
                  isOpen
                    ? "#3F3F3F"
                    : hasShadow
                    ? menuBackgroundBlack
                      ? "#fff"
                      : "#3F3F3F"
                    : "#3F3F3F"
                }
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke={
                  isOpen
                    ? "#3F3F3F"
                    : hasShadow
                    ? menuBackgroundBlack
                      ? "#fff"
                      : "#3F3F3F"
                    : "#3F3F3F"
                }
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke={
                  isOpen
                    ? "#3F3F3F"
                    : hasShadow
                    ? menuBackgroundBlack
                      ? "#fff"
                      : "#3F3F3F"
                    : "#3F3F3F"
                }
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke={
                  isOpen
                    ? "#3F3F3F"
                    : hasShadow
                    ? menuBackgroundBlack
                      ? "#fff"
                      : "#3F3F3F"
                    : "#3F3F3F"
                }
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke={
                  isOpen
                    ? "#3F3F3F"
                    : hasShadow
                    ? menuBackgroundBlack
                      ? "#fff"
                      : "#3F3F3F"
                    : "#3F3F3F"
                }
              />
            </g>
          </svg>
        </div>
      </div>
      {showMenu && (
        <div className={isOpen ? "fadeIn" : "fadeOut"}>
          <FullscreenMenu setIsOpen={setIsOpen} setShowMenu={setShowMenu} />
        </div>
      )}
    </nav>
  );
}
