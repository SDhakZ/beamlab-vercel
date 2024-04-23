"use client";

import { useState, useEffect } from "react";

const useScrollProgress = (ref) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }

      const windowScroll = window.scrollY;
      const sectionTop = ref.current.offsetTop;
      const sectionHeight = ref.current.offsetHeight;

      if (
        windowScroll > sectionTop - window.innerHeight &&
        windowScroll < sectionTop + sectionHeight
      ) {
        const maxScroll = sectionHeight + window.innerHeight;
        const scrolled = windowScroll - sectionTop + window.innerHeight;
        const scrollPercent = scrolled / maxScroll;
        setScrollY(scrollPercent * 100);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Ensure to clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]); // Dependency array includes ref to re-attach listener if the ref changes

  return scrollY;
};

export default useScrollProgress;
