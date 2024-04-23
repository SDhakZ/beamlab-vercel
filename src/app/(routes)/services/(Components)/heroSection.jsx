import React from "react";

export default function HeroSection(props) {
  const { selectedServiceData } = props;
  return (
    <section className="relative flex flex-col-reverse items-center justify-between w-full gap-6 container-margin sm:gap-0 sm:flex-row ">
      <div className="bg-black-shade-300 rounded-md  px-2 py-3 sm:px-0 sm:py-0 sm:bg-transparent sm:min-w-[200px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[350px] lg:min-w-[400px] lg:max-w-[450px]">
        <h1 className="w-full text-center text-white-shade-100 sm:text-left sm:text-black-shade-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:-mt-6 font-semibold md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.2] capitalize ">
          {selectedServiceData?.serviceDetail.heroTitle}
        </h1>
      </div>
      <figure className="w-full lg:max-w-[900px]">
        <img src={selectedServiceData?.serviceDetail.heroImage} />
      </figure>
    </section>
  );
}
