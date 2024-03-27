"use client";
import React, { useState, useEffect } from "react";
import MenuBarCSS from "./menubar.module.css";
import FullscreenMenu from "./fullscreenMenu";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    // Immediately check and apply the correct menu bar state based on scroll position
    const initialHandleScroll = () => {
      const scrollY = window.scrollY;
      setHasShadow(scrollY > 0);
    };

    // Set up the scroll event listener
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
    setIsOpen(!isOpen);
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
          ? "#374852"
          : hasShadow
          ? "#fff"
          : "transparent",
        boxShadow: hasShadow
          ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
          : "none",
        zIndex: 1000,
      }}
      className={`flex sticky justify-center transition-all duration-100 items-center top-0 w-full h-20 lg:h-24`}
    >
      <div className="flex items-center justify-between w-full h-full container-margin">
        <a title="Logo" href="/">
          Image
        </a>
        <label
          className={`${MenuBarCSS["label"]} ${
            !isOpen ? MenuBarCSS.labelhover : ""
          }`}
          htmlFor="burger"
        >
          <input
            onClick={handleMenuToggle}
            autoComplete="off"
            type="checkbox"
            id="burger"
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      {isOpen && <FullscreenMenu />}
    </nav>
  );
}
