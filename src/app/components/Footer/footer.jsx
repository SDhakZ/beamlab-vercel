"use client";
import React from "react";
import Link from "next/link";
import { menuData, socialInfo } from "@/app/data/companyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
  return (
    <footer className="bg-background-black" id="footer">
      <div className="pt-16 pb-20 space-y-8 tracking-wider lg:pt-20 container-margin">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap justify-center gap-10 sm:gap-20 sm:flex-nowrap">
            <div className="col-span-1 flex flex-col items-center sm:items-start  w-full max-w-[340px]">
              <a
                href="/"
                className="text-4xl font-bold cursor-pointer text-white-shade-100 font-cervino"
              >
                beamlab<span className="text-primary-orange-300">.</span>
              </a>
              <p className="mt-4 font-light leading-relaxed text-center sm:text-left text-white-shade-200">
                Copyright &copy; 2024 beamlab.co.
                <br /> All rights reserved
              </p>
            </div>
            <div className="grid w-full gap-10 lg:gap-20 lg:grid-cols-3">
              {menuData.slice(0, 3).map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center col-span-1 sm:items-start"
                >
                  <p className="text-2xl font-medium tracking-wider text-white-shade-100">
                    {section.title}
                  </p>
                  <ul className="mt-5 space-y-2 font-light ">
                    {section.items.map((item, itemIndex) => (
                      <li className="text-center sm:text-left" key={itemIndex}>
                        <Link
                          title={item.title}
                          href={item.link}
                          className="gap-3 text-lg text-center transition-all duration-200 hover:text-white-shade-100 text-white-shade-300 w-fit hover:text-primary-accent lg:text-lg"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex gap-6 sm:flex-col w-fit">
              {socialInfo.map((social, index) => (
                <a
                  key={index}
                  className="flex items-center justify-center rounded-full w-11 h-11 md:w-11 md:h-11 bg-black-shade-200"
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
          <div className="flex flex-wrap justify-center w-full sm:justify-between gap-11 sm:flex-nowrap">
            <div className="flex flex-col items-center gap-6 sm:items-start">
              <p className="text-2xl font-semibold capitalize text-white-shade-200">
                Talk To A Real Person
              </p>
              <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
                {menuData[3].items.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex gap-3 text-white-shade-200"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white-shade-200"
                      icon={item.icon}
                    />
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
              <button className="px-10 py-2 mt-2 transition-all duration-200 bg-transparent rounded-full glow-effect text-primary-orange-100 w-fit outline outline-2">
                Send Quick Form
              </button>
            </div>
            <figure className="flex self-center justify-center w-full sm: sm:justify-end sm:self-end">
              <img className="h-auto w-28" src="./BrandLogoIllustration.png" />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}
