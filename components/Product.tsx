import React from "react";

type Props = {};

export default function Product({}: Props) {
  return (
    <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto ">
      <div className="flex flex-col lg:grid grid-cols-2 gap-16 mt-24">
        <img
          src="/platform_scale.jpg"
          alt="picture of scale"
          className="w-auto lg:w-3/4 h:auto"
        />
        <div className="flex flex-col">
          <h1 className="text-wayfast-green text-center lg:text-left tracking-wide font-semibold text-4xl md:text-5xl lg:font-extrabold lg:text-4xl, xl:text-5xl">
            V5 Platform Scale
          </h1>
          <div className="mt-12 flex gap-4 lg:flex-row flex-col items-start justify-start">
            <a
              href="/demo"
              id="product-quote-btn"
              className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfast-green rounded-2xl text-base bg-wayfast-green text-white md:py-4 "
            >
              BOOK DEMO
            </a>
            <a
              href="/harvest-calculator"
              id="product-quote-btn"
              className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfast-green rounded-2xl text-base bg-wayfast-green  text-white md:py-4 "
            >
              SEE SAVINGS
            </a>
          </div>
          <ul></ul>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
