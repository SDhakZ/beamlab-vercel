import React from "react";

export default function heroSection(props) {
  const { selectedServiceData } = props;
  return (
    <section className="relative flex flex-col-reverse items-center justify-between gap-6 sm:gap-0 sm:flex-row ">
      <div className="z-10 px-2 bg-black-shade-300 py-3 sm:px-0 sm:py-0 sm:bg-transparent min-w-[100px]  ml-0 flex md:ml-8 sm:ml-7 lg:ml-12 xl:ml-52 sm:max-w-[120px] sm:min-w-[120px] md:min-w-[200px] md:max-w-[220px] lg:min-w-[410px] lg:max-w-[420px]">
        <h1 className="w-full text-center text-white-shade-100 sm:text-left sm:text-black-shade-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:-mt-6 font-semibold md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.2] capitalize ">
          {selectedServiceData?.serviceDetail.heroTitle}
        </h1>
      </div>
      <figure className="w-full max-w-[900px] right-0">
        <img src={selectedServiceData?.serviceDetail.heroImage} />
      </figure>
    </section>
  );
}
