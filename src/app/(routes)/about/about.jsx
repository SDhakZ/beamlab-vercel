import React from "react";
import Counter from "@/app/components/counter/Counter";
import Timeline from "./(Components)/timeline";
import ContactModule from "@/app/components/contactModule/ContactModule";

export default function About() {
  return (
    <div>
      <section className="container-margin-compact top-section-p">
        <h1 className="text-3xl font-medium text-center md:text-3xl lg:text-5xl">
          About Us
        </h1>
        <div className="flex flex-col items-center justify-between w-full gap-2 mt-10 lg:gap-20 lg:mt-20 md:gap-12 sm:flex-row sm:mt-16">
          <figure>
            <img
              className="w-full h-auto max-w-[450px]"
              src="/assets/about-vision.png"
            />
          </figure>

          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h2 className="text-2xl font-medium leading-normal sm:text-2xl lg:text-4xl md:text-3xl">
              Our Long Term Vison
            </h2>
            <p className="w-full text-base md:min-w-p[350px] lg:min-w-[400px] text-black-shade-200 leading-relaxed md:text-base lg:text-lg  max-w-[550px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 margin-t bg-black-shade-300 ">
        <div className="flex items-center justify-center container-margin">
          <div className="flex max-w-[900px] flex-col items-center w-full gap-8 sm:gap-16 sm:flex-row">
            <Counter
              darkMode={true}
              number={100}
              title="Satisfaction"
              unit="%"
            />
            <hr className="sm:block hidden sm:visble border-none h-24 w-[0.4rem] bg-black-shade-100" />
            <Counter darkMode={true} number={40} title="Clients" unit="+" />
            <hr className="hidden sm:block border-none h-24 w-[0.4rem] bg-black-shade-100" />
            <Counter darkMode={true} number={5} title="Years" unit="+" />
          </div>
        </div>
      </section>
      <section className="bg-background-black padding-y-lg ">
        <h2 className="mt-10 text-2xl font-medium text-center md:text-3xl lg:text-4xl text-white-shade-200 mb-28">
          Our Timeline
        </h2>

        <Timeline />
      </section>
      <ContactModule />
    </div>
  );
}
