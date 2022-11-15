import React from "react";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="h-100 relative z-0">
      <span id="section-span">
        <img id="section-span-img" src="/image.webp" />
      </span>
      <main className="px-12 pt-12 py-48 lg:py-24 z-10 relative max-w-7xl mx-auto flex flex-col lg:grid-cols-12 lg:gap-4">
        <div className="text-center lg:col-span-6 lg:text-left lg:flex flex-col lg:items-start">
          <h1 className="tracking-tight text-wayfast-green pt-6 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block pt-20">CANNABIS</span>
            <span className="block pt-2">CULTIVATION</span>
            <span className="block pt-2">SCALES</span>
          </h1>
          <p className="mt-6 text-3xl font-light tracking-wider">
            Watch It Work In Real Time
          </p>
          <div className="mt-12 items-center justify-center hidden lg:flex">
            <a
              href="#contact"
              className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfast-green rounded-2xl text-base bg-wayfast-green hover:bg-white text-white hover:text-black md:py-4"
            >
              REQUEST QUOTE
            </a>
          </div>
        </div>
        <div className="hidden md:flex col-span-6 items-center mt-4 lg:mt-0">
          <div className="w-full h-5/6">
            <div className="w-full h-full">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eOtIKVcEmfk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="md:hidden col-span-6 flex items-center justify-center mt-4 lg:mt-0"></div>
        <div className="lg:hidden"></div>
      </main>
    </div>
  );
}
