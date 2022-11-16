import React from "react";

type Props = {};

export default function Feature({}: Props) {
  return (
    <div className="h-100 relative">
      <span>
        <img src="/green_image.jpg" id="feature-span-img" />
        <div className="layer"></div>
      </span>
      <main className="px-12 py-16 z-10 relative max-w-7xl mx-auto flex flex-col lg:gap-4">
        <h1
          className="text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl xl:text-6xl"
          id="feature-main-h1"
        >
          Features &#38; Benefits
        </h1>
        <div className="col-span-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 lg:gap-x-24 gap-y-12">
            <li
              className="lg:mt-0 col-span-1 flex flex-col items-start text-center px-8 rounded-3xl shadow-xl divide-gray-200"
              id="feature-li"
            >
              <div className="flex flex-row gap-2 items-center pt-4">
                <img
                  src="/features_tag.svg"
                  alt="icons"
                  width="70"
                  height="70"
                />
                <h3 className="text-xl lg:text-2xl text-wayfast-green font-medium text-left">
                  Attention to Detail
                </h3>
              </div>
              <div className="flex-1 flex flex-col pb-4">
                <p className="text-sm my-4 leading-6 text-gray-700 flex flex-col text-left">
                  On screen options of 'No tag' or 'Broken tag' to record
                  certain plants keeps the harvest moving, in record time!
                </p>
              </div>
            </li>
            <li
              className="lg:mt-0 col-span-1 flex flex-col items-start text-center px-8 bg-white rounded-3xl shadow-xl divide-gray-200"
              id="feature-li"
            >
              <div className="flex flex-row gap-2 items-center pt-4">
                <img
                  src="/features_spanish.svg"
                  alt="icons"
                  width="70"
                  height="70"
                />
                <h3 className="text-xl lg:text-2xl text-wayfast-green font-medium text-left">
                  En Español
                </h3>
              </div>
              <div className="flex-1 flex flex-col pb-4">
                <p className="text-sm my-4 leading-6 text-gray-700 flex flex-col text-left">
                  Interfaz fácil de usar, soporte en ingles y Español.
                </p>
              </div>
            </li>
            <li
              className="lg:mt-0 col-span-1 flex flex-col items-start text-center px-8 bg-white rounded-3xl shadow-xl divide-gray-200"
              id="feature-li"
            >
              <div className="flex flex-row gap-2 items-center pt-4">
                <img
                  src="/features_data.svg"
                  alt="icons"
                  width="70"
                  height="70"
                />
                <h3 className="text-xl lg:text-2xl text-wayfast-green font-medium text-left">
                  Data Security
                </h3>
              </div>
              <div className="flex-1 flex flex-col pb-4">
                <p className="text-sm my-4 leading-6 text-gray-700 flex flex-col text-left">
                  Redundant backup layers ensure your data is always safe and
                  secure.
                </p>
              </div>
            </li>
          </div>
        </div>
      </main>
      <div></div>
    </div>
  );
}

//text-white text-center tracking-wide font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl
