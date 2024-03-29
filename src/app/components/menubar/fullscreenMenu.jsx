"use client";
import React, { useState, useEffect } from "react";
import FullMenuCSS from "./fullscreenMenu.module.css";
import { menuData, socialInfo } from "../../data/companyInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FullscreenMenu(props) {
  const { setIsOpen } = props;
  const pathname = usePathname();

  // Find the title corresponding to the current path
  const findTitleByPath = (path) => {
    const menuItem = menuData.find((item) => item.link === path);
    return menuItem ? menuItem.title : "Home";
  };

  const [activeTitle, setActiveTitle] = useState(findTitleByPath(pathname));
  const [displayTitle, setDisplayTitle] = useState(activeTitle);
  const [opacity, setOpacity] = useState(1);
  const [blur, setBlur] = useState(0);
  // Update activeTitle if pathname changes, e.g., on navigation
  useEffect(() => {
    setActiveTitle(findTitleByPath(pathname));
  }, [pathname]);
  console.log(pathname);

  useEffect(() => {
    setOpacity(0); // Start fade out
    setBlur("10px");
    const timeoutId = setTimeout(() => {
      setDisplayTitle(activeTitle); // Change the title after fade out
      setOpacity(1); // Start fade in
      setBlur(0);
    }, 100); // Match the duration of your CSS transition

    return () => clearTimeout(timeoutId);
  }, [activeTitle]);

  return (
    <div
      className={`${FullMenuCSS.height} absolute lg:fixed left-0 z-[998] flex flex-col items-center justify-center w-full pt-6 lg:pt-10 py-16 top-[4.9rem] bg-background-white overflow-y-auto`}
    >
      <div className="flex flex-col px-[20px] sm:px-[35px] md:px-[50px] lg:px-[65px]  justify-between max-w-[1300px] w-full h-full">
        <div className="flex items-center justify-between w-full h-full gap-36 max-w-[900px] ">
          <ul className="flex-1 space-y-8 text-5xl font-semibold max-w-fit font-poppins text-black-shade-300">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    setActiveTitle(menuItem.title);
                  }}
                  onMouseEnter={() => setActiveTitle(menuItem.title)} // Update title on hover
                  onMouseLeave={() => setActiveTitle(findTitleByPath(pathname))} // Revert to the active path's title
                  className={`${
                    pathname === menuItem.link
                      ? "text-black-shade-300"
                      : "text-white-shade-300"
                  }  hover:text-black-shade-300 transition-all duration-300`}
                  href={menuItem.link}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative mr-10">
            <div
              className="absolute ease-in-out transition-opacity duration-100 text-[clamp(4em,8vw,10em)] whitespace-nowrap text-black-shade-300 font-bold transform -translate-x-1/2 -translate-y-1/2 font-poppins top-1/2 left-1/2"
              style={{ opacity: opacity, filter: `blur(${blur})` }}
            >
              {displayTitle.toUpperCase()}
            </div>
            <img className="w-[450px]" src="./menuBG.png" alt="Beamlab" />
          </div>
        </div>
        <div className="flex items-center mt-16 justify-between w-full max-w-[1200px]">
          <p className="text-black-shade-300">
            Copyright © 2024 beamlab.co. All rights reserved{" "}
          </p>
          <div className="flex gap-5">
            {socialInfo.map((social, index) => (
              <a
                key={index}
                className="flex items-center justify-center rounded-full w-11 h-11 bg-black-shade-200"
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-2xl"
                  color="#fff"
                />
              </a>
            ))}
          </div>
        </div>
        <hr className="block w-full h-[0.2rem] mt-7 bg-black-shade-100"></hr>
      </div>
    </div>
  );
}
