import React from "react";
import { useState } from "react";
type Props = {};

export default function Contact({}: Props) {
  const [formValue, setFormValue] = useState({
    name: "",
    number: "",
    email: "",
    company: "",
    hanging: "",
    platform: "",
    predict: "",
    other: "",
  });

  // This creates an array with 4 false value representing the 4 check boxes. This will show error message for no checkbox
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { name, number, email, company, hanging, platform, predict, other } =
    formValue;

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="px-12 pb-16 sm:pb-20 z-10 relative max-w-4xl mx-auto ">
      <h1 className="tracking-tight text-black text-center font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
        Ready to WayFast?
      </h1>
      <div>
        <h3 className="font-bold text-2xl tracking-tight my-8">
          1. Contact Information
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-2">
          <div className="relative">
            <input
              type="text"
              className="shadow-sm p-2 block w-full sm:text-sm border border-wayfast-green focus:outline-none focus:border-atgBlue rounded-xl"
              placeholder="FULL NAME"
              name="name"
              value={name}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="shadow-sm p-2 block w-full sm:text-sm border border-wayfast-green focus:outline-none focus:border-atgBlue rounded-xl"
              placeholder="PHONE NUMBER"
              name="phone"
              value={number}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="shadow-sm p-2 block w-full sm:text-sm border border-wayfast-green focus:outline-none focus:border-atgBlue rounded-xl"
              placeholder="EMAIL ADDRESS"
              name="email"
              value={email}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="shadow-sm p-2 block w-full sm:text-sm border border-wayfast-green focus:outline-none focus:border-atgBlue rounded-xl"
              placeholder="COMPANY NAME"
              name="company"
              value={company}
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl tracking-tight my-8">
          2. What are you looking for?
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-2">
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              name="product"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-base">
              <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                Hanging Scale
              </label>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              value="platform"
              name="product"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-base">
              <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                Platform Scale
              </label>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              value="predict"
              name="product"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-base">
              <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                Predict
              </label>
            </div>
          </div>
          <div className="flex items-top mt-3 lg:col-span-3">
            <input
              type="checkbox"
              value="other"
              name="product"
              className="focus:ring-indigo-500 h-4 w-4 min-w-[16px] text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-base">
              <label className="font-medium text-gray-500 flex flex-row items-center justify-center gap-2">
                Other
              </label>
            </div>
            <textarea
              rows="3"
              name="text"
              className="shadow-sm p-2 block ml-4 w-full sm:text-sm border border-wayfast-green focus:outline-none focus:border-atgBlue rounded-xl"
              placeholder="Type..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          id="contact-form-btn"
          type="submit"
          className="mx-2 flex items-center justify-center px-10 py-3 border-2 border-wayfast-green rounded-2xl text-base bg-wayfast-green hover:bg-white text-white hover:text-black md:py-4 "
        >
          SEND REQUEST
        </button>
      </div>
    </form>
  );
}
