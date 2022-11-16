import React from "react";
import { useState } from "react";

type Props = {};

export default function Product({}: Props) {
  //state for platform scale
  const [isWetModeOpen, setWetModeOpen] = useState(false);
  const [isSpecificationOpen, setSpecificationOpen] = useState(false);

  const visibleDisplay = `marker:text-wayfast-green list-outside list-disc mt-2 ml-8`;

  //onClick for platform scale
  const handleWetModeClick = () => {
    setWetModeOpen(!isWetModeOpen);
  };
  const handleSpecificationClick = () => {
    setSpecificationOpen(!isSpecificationOpen);
  };

  //state for hanging scale
  const [isHangingWetMode, setHangingWetMode] = useState(false);
  const [isHangingSpecificationOpen, setHangingSpecificationOpen] =
    useState(false);

  //onClick for hanging scale
  const handleHangingWetModeClick = () => {
    setHangingWetMode(!isHangingWetMode);
  };

  const handleHangingSpecifciationClick = () => {
    setHangingSpecificationOpen(!isHangingSpecificationOpen);
  };

  return (
    <div>
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
            <ul className="marker:text-wayfast-green list-outside list-disc mt-12 ml-8">
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                24” x 31.6” Platform OHAUS Scale
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                Legal for Trade, NTEP-certified
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                6” Wheels for Maximum Portability
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                Capacity: 250 lbs
              </li>
              <li className="py-2 pb-3 border-b border-gray-700 text-lg lg:text-2xl font-semibold">
                Recommended floor space: 3' x 5'
              </li>
            </ul>
            <div className="ml-8 border-b border-gray-700 py-3 ">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg lg:text-2xl font-semibold">
                  Wet &#38; Dry Harvest Modes
                </h3>
                <button
                  onClick={handleWetModeClick}
                  className={`${isWetModeOpen ? "hidden" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </button>

                <button
                  onClick={handleWetModeClick}
                  className={`${isWetModeOpen ? "" : "hidden"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className={`${isWetModeOpen ? visibleDisplay : "hidden"} `}>
                <li className="py-2 text-lg font-semibold">
                  Standard:
                  <p className="text-gray-600 text-sm font-normal">
                    After each successful scan, remove and replace with the next
                    plant. 1,200 plants/hour
                  </p>
                </li>
                <li className="py-2 text-lg font-semibold">
                  Incremental:
                  <p className="text-gray-600 text-sm font-normal">
                    Add a new plant to the tote after each successful scan, no
                    need to remove the previous plant. 1,800 plants/hour
                  </p>
                </li>
                <li className="py-2 text-lg font-semibold">
                  Batch(Beta):
                  <p className="text-gray-600 text-sm font-normal">
                    Place a tote with up to 25 plants and average out the
                    weight. 25x faster than standard mode.
                  </p>
                </li>
              </ul>
            </div>
            <div className="ml-8 border-b border-gray-700 py-3 ">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg lg:text-2xl font-semibold">
                  Specifications
                </h3>
                <p></p>
                <button
                  onClick={handleSpecificationClick}
                  className={`${isSpecificationOpen ? "hidden" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={handleSpecificationClick}
                  className={`${isSpecificationOpen ? "" : "hidden"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul
                className={`${
                  isSpecificationOpen ? visibleDisplay : "hidden"
                } `}
              >
                <li className="py-2 text-lg font-semibold">
                  {" "}
                  Dimensions:
                  <p className="text-gray-600 text-sm font-normal">
                    42” (L) x 24” (W) x 60” (H) + expandable (H)”
                  </p>
                </li>
                <li className="py-2 text-lg font-semibold">
                  {" "}
                  Resolution:
                  <p className="text-gray-600 text-sm font-normal">5 Grams</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <main className="px-12 py-16 sm:py-20 z-10 relative max-w-7xl mx-auto ">
        <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-16 ">
          <div className="flex flex-col ">
            <h1 className="text-wayfast-green text-center lg:text-left tracking-wide font-semibold text-4xl md:text-5xl lg:font-extrabold lg:text-4xl, xl:text-5xl">
              V1 Hanging Scale
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
            <ul className="marker:text-wayfastGreen list-outside list-disc mt-12 ml-8">
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                Adjustable Height to fit your needs
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                Legal for Trade, NTEP-certified
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                3” Wheels for Maximum Portability
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                Extra long hook to keep harvest moving
              </li>
              <li className="py-2 text-lg lg:text-2xl font-semibold">
                Capacity: 30 lbs
              </li>
              <li className="py-2 pb-3 border-b border-gray-700 text-lg lg:text-2xl font-semibold">
                Recommended floor space: 2' x 2'
              </li>
            </ul>
            <div className="ml-8 border-b border-gray-700 py-3">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg lg:text-2xl font-semibold">
                  Wet &#38; Dry Harvest Modes
                </h3>
                <button
                  onClick={handleHangingWetModeClick}
                  className={`${isHangingWetMode ? "hidden" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={handleHangingWetModeClick}
                  className={`${isHangingWetMode ? "" : "hidden"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className={`${isHangingWetMode ? visibleDisplay : "hidden"}`}>
                <li className="py-2 text-lg font-semibold">
                  <p className="text-gray-600 text-sm">
                    After each successful scan, remove and replace with the next
                    plant. 1,200 plants/hour
                  </p>
                </li>
              </ul>
            </div>
            <div className="ml-8 border-b border-gray-700 py-3">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg lg:text-2xl font-semibold">
                  Specifications
                </h3>
                <button
                  onClick={handleHangingSpecifciationClick}
                  className={`${isHangingSpecificationOpen ? "hidden" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={handleHangingSpecifciationClick}
                  className={`${isHangingSpecificationOpen ? "" : "hidden"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-wayfast-green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul
                className={`${
                  isHangingSpecificationOpen ? visibleDisplay : "hidden"
                }`}
              >
                <li className="py-2 text-lg font-semibold">
                  {" "}
                  Dimensions:{" "}
                  <p className="text-gray-600 text-sm">
                    16” (L) x 16” (W) x 60” (H) + expandable (H)”
                  </p>
                </li>
                <li className="py-2 text-lg font-semibold">
                  {" "}
                  Resolution: <p className="text-gray-600 text-sm"> 1 Gram</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start justify-end">
            <img
              src="/hanging_scale.jpg"
              className="w-auto lg:w-3/4 h:auto"
              alt="picture of hanging scale"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
