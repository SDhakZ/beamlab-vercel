"use client";

import { useState, useEffect } from "react";

const useScrollProgress = (ref) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return scrollY;
};

export default useScrollProgress;
