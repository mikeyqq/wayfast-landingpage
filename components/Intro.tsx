import React from "react";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="h-100 relative">
      <span id="section-span">
        <img id="section-span-img" src="/image.webp" />
      </span>
      <main className="px-12 pt-12 py-48 lg:py-24 z-10 relative max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-4">
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

        <div className="hidden lg:flex lg:aspect-w-16 lg:aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/eOtIKVcEmfk?autoplay=1&amp;mute=1&amp;controls=0&amp;origin=https%3A%2F%2Fwww.gowayfast.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="my-10 aspect-w-16 aspect-h-9 lg:hidden md:aspect-w-5 md:aspect-h-3">
          <iframe
            src="https://www.youtube.com/embed/eOtIKVcEmfk?autoplay=1&amp;mute=1&amp;controls=0&amp;origin=https%3A%2F%2Fwww.gowayfast.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="lg:hidden"></div>
      </main>
    </div>
  );
}
