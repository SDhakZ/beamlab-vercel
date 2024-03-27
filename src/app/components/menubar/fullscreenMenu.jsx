import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import FullMenuCSS from "./fullscreenMenu.module.css";

export default function FullscreenMenu() {
  return (
    <div
      className={`${FullMenuCSS.height} absolute  lg:fixed left-0 z-[998] flex items-center justify-center w-full pt-6 lg:pt-0 py-16 top-[4.9rem] bg-secondary-accent overflow-y-auto`}
    >
      <div className="grid xl:max-w-[1250px] grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 container-margin">
        {/* Service & company Info */}

        {/* Collaboration Info */}
        <div className="flex flex-col gap-5 sm:flex-wrap lg:gap-6">
          <h4 className="text-2xl font-bold text-col lg:text-3xl text-zinc-50">
            Collaborate with us
          </h4>
          <div className="flex flex-col gap-4 lg:gap-5"></div>
          {/* Social Info */}
          <div className="flex items-center gap-10 mt-2 lg:mt-2"></div>
        </div>
      </div>
    </div>
  );
}
