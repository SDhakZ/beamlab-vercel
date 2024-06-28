import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuData, socialInfo } from "@/app/data/companyInfo.js";

export default function ContactModule() {
  return (
    <section className="relative flex justify-center w-full padding-y-lg lg:pb-24 bg-black-shade-300">
      <img
        title="abstract logo"
        alt="abstract"
        className="absolute bottom-0 right-0 z-0 w-36 sm:w-36 md:w-52 lg:w-56"
        src="/assets/abstract-footer.png"
      />
      <div className="w-full container-margin">
        <div>
          <span className="text-base font-semibold font-manrope md:text-lg font-base text-white-shade-100">
            Contact Us
          </span>

          <div className="mt-2 text-3xl font-medium font-poppins leading-12 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-white-shade-100">
            <span className="mt-2 text-3xl font-medium gradient font-visby leading-12 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-primary-orange-300">
              Get In Touch:{" "}
            </span>
            Reach Out to Us for Inquiries, Assistance, or Collaborations
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-12 lg:gap-x-0 lg:gap-y-6 lg:mt-14">
          {menuData[3].items.map((info, index) => (
            <div key={index} className="col-span-2 sm:col-span-1">
              <a
                title={info.title}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer w-fit hover:text-primary-orange-100"
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-white-shade-200"
                  icon={info.icon}
                />
                <p
                  className={`text-lg sm:text-lg text-white-shade-200 tracking-wider font-medium relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            </div>
          ))}
          <div className="col-span-2 my-4 sm:col-span-1 lg:my-2">
            <button className="px-8 py-3 mt-2 transition-all duration-100 bg-transparent rounded-full shiny-global glow-effect text-primary-orange-100 w-fit outline outline-2">
              Send Quick Form
            </button>
          </div>

          <div className="relative z-10 flex items-center col-span-2 gap-10 sm:gap-8 sm:col-span-1">
            {socialInfo.map((socialInfo, index) => (
              <a
                target="_blank"
                key={index}
                title={socialInfo.title}
                className="text-3xl transition-all duration-300 sm:text-3xl lg:text-[2rem] text-white-shade-200 hover:text-primary-orange-100"
                href={socialInfo.link}
              >
                <FontAwesomeIcon icon={socialInfo.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
