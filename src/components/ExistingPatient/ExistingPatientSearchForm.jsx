import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { states } from "../../constants/states";

const ExistingPatientSearchForm = () => {
  const [shippingState, setShippingState] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successModal, setSuccessModal] = useState(false);

  const [message, setMessage] = useState("");

  // Validate form inputs
  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate first name
    if (!shippingState) {
      errors.shippingState = "State is required";
      valid = false;
    }

    // Validate last name
    if (!email) {
      errors.email = "Email is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const searchPatient = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = await fetch(
        "https://backend.trtpep.com/api/search-patient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shippingState, email }),
        }
      );

      const resp = await data.json();
      console.log("patient-data >> ", resp);
      // setSuccessModal(true);
      setMessage(resp.message);
    } else {
      setSuccessModal(false);
    }
  };
  return (
    <div className="w-full min-h-screen flex  items-center justify-center py-20 bg-gray-100">
      <form
        onSubmit={searchPatient}
        className="w-[50%] p-10 rounded-lg bg-white"
      >
        <h2 className="text-xl font-semibold">Prescription Refill</h2>
        <p className="mt-2">
          Easily Refill Your Prescription at TRTPEP! Simply enter your shipping
          state and the email associated with your account to get started.
        </p>
        <p className=" text-red-500 text-center mt-4">{message}</p>
        <div className="w-full border border-gray-200 my-6" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <label htmlFor="state">
              <span className="text-red-500">*</span> Indicates required fields
            </label>
            <select
              name="shippingState"
              value={shippingState || ""}
              onChange={(e) => setShippingState(e.target.value)}
              id="state"
              className="border mt-1.5 w-60 p-2 rounded-md text-sm outline-none"
            >
              {states.map((s, index) => {
                return (
                  <option value={s} key={index}>
                    {s}
                  </option>
                );
              })}
            </select>
            {errors.shippingState && (
              <p className="text-red-600 text-sm">{errors.shippingState}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 pt-6">
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="david@gmail.com"
              className="p-2.5 text-sm rounded-md border outline-none w-72"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="w-full mt-6">
          <input
            type="checkbox"
            name="terms-and-conditions"
            id="terms-and-conditions"
            className="w-3 h-3 mr-2"
          />
          <label className="text-sm" htmlFor="terms-and-conditions">
            I agree to the "Terms & Conditions" and acknowledge that I will not
            share, copy, or disclose any information from TRT PEP's website,
            including medication lists, dosages, or pricing, without prior
            written consent from TRT PEP.
          </label>
        </div>

        <button
          type="submit"
          className="bg-color text-white font-medium text-sm px-4 py-2 rounded-md mt-6"
        >
          Search
        </button>
      </form>

      {successModal && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="w-full lg:w-auto border bg-white rounded-xl p-8 lg:py-16 lg:px-28 flex flex-col items-center justify-center relative">
            <button
              className="absolute top-4 right-4 w-6 h-6 bg-gray-400/20 rounded-full flex items-center justify-center"
              onClick={() => setSuccessModal(false)}
            >
              <IoClose className="text-xl" />
            </button>
            <div className="w-[64px] h-[64px] rounded-full bg-red-50 flex items-center justify-center">
              <FaCheck className="text-[30px] text-red-600" />
            </div>
            <h3 className="font-semibold text-xl mt-4">
              Enrolled Successfully
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExistingPatientSearchForm;
