import React from "react";

type Props = {};

export default function Battery({}: Props) {
  return (
    <main className="px-12 py-8 sm:py-12 z-10 relative max-w-6xl mx-auto over-flow-hidden rounded-3xl mb-4">
      <div className="rounded-lg">
        <img
          src="/banner_testimonial_desk.webp"
          className="z-0"
          id="battery-span-img"
        />
      </div>
      <div className="relative z-30 flex flex-col lg:grid grid-cols-3">
        <div className="hidden lg:flex flex-col items-center justify-center">
          <img
            src="/battery_white.svg"
            alt="battery icon"
            width="160"
            height="160"
          />
        </div>
        <div
          className="col-span-2 lg:border-l border-white pl-8"
          id="battery-text-area"
        >
          <h3 className=" text-white flex flex-row gap-2 text-left mb-4 lg:mb-0 tracking-wide font-semibold text-3xl md:text-6xl lg:text-5xl, xl:text-6xl">
            <div className="lg:hidden flex flex-col items-center justify-center">
              <img
                src="/battery_white.svg"
                alt="icons of the battery"
                width="100"
                height="100"
              />
            </div>
            Harvest In The Dark
          </h3>
          <p className="text-white text-2xl my-4 font-light leading-7 tracking-wide flex flex-col text-left">
            Upgrade your production with our
            <span className="pt-1 block">
              <span className="font-bold">42,000 mAh</span> rechargeable Battery
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
