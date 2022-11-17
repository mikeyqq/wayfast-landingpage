import React from "react";

type Props = {};

export default function Partner({}: Props) {
  return (
    <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto">
      <h1 className="text-black text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl xl:text-6xl">
        What Our Partners Say
      </h1>
      <div className="flex flex-col lg:grid grid-cols-3 pt-2 sm:items-center">
        <div>
          <img
            src="/claybourne.svg"
            alt="logo of partners claybourne co"
            className="z-0 rounded-3xl h-64 w-64"
            id="partner-span-img"
          />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start">
          <img src="/question_mark.svg" className="z-0 rounded-3xl h-10 w-10" />
          <p className="ml-3 text-xl text-left tracking-wide text-gray-900 z-0 font-extralight">
            This is the only system that makes any sort of sense!
          </p>
          <p className="ml-3 text-2xl font-bold tracking-wide pt-4">
            Brent Barnes
          </p>
          <p className="ml-3 block text-xl font-light pt-1">
            COO, Claybourne Co
          </p>
        </div>
      </div>
    </main>
  );
}
