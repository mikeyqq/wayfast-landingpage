import React from "react";

type Props = {};

export default function Info({}: Props) {
  return (
    <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto">
      <h1 className="text-black text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl xl:text-6xl">
        Harvest compliance. Simplified.
      </h1>

      {/* WEB */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 mt-20">
        <div className="col-span-3 mx-40 mt-2">
          <img
            src="/steps_desk.svg"
            alt="picture of the info bar"
            // objectPosition="center"
            className="h-24 w-full sm:h-24"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="pt-4 text-center text-black text-3xl font-medium tracking-widest">
            Weigh
          </h3>
          <p className="text-center text-gray-700 w-1/2 mx-auto pt-4">
            Just place the plant.
            <span className="block"> We automatically capture your data.</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="pt-4 text-center text-black text-3xl font-medium tracking-widest">
            Repeat
          </h3>
          <p className="text-center text-gray-700 w-1/2 mx-auto pt-4">
            Place a new plant every 3 seconds. Click in at 1,200+ plants per
            hour.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="pt-4 text-center text-black text-3xl font-medium tracking-widest">
            Export
          </h3>
          <p className="text-center text-gray-700 w-1/2 mx-auto pt-4">
            Upload your harvest file into your preferred software.
          </p>
        </div>
      </div>
      {/* MOBILE */}
      <div className="grid grid-cols-3 gap-4 mt-20 md:hidden">
        <div>
          <div className="">
            <div className="">
              <img src="/steps_desk_vertical.svg" className="-my-auto" />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-52">
          <div className="flex flex-col justify-end">
            <h3 className="text-left text-black text-2xl font-medium tracking-widest">
              Weigh
            </h3>
            <p className="text-left text-gray-700">Just place the plant.</p>
            <span> We automatically capture your data.</span>
          </div>
          <div className="flex flex-col justify-end">
            <h3 className="pt-1 text-left text-black text-2xl font-medium tracking-widest">
              Repeat
            </h3>
            <p className="text-left text-gray-700">
              Place a new plant every 3 seconds. Clock in at 1,200+ plants per
              hour.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <h3 className="pt-1 text-left text-black text-2xl font-medium tracking-widest">
              Export
            </h3>
            <p className="text-left text-gray-700 pt-2">
              Upload your harvest file into your preferred software.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
