import React from "react";
import { Link } from "react-router-dom";

const ExistingPatientSearchForm = () => {
  return (
    <div className="w-full min-h-screen flex  items-center justify-center py-20 bg-gray-100">
      <form className="w-[50%] p-10 rounded-lg bg-white">
        <h2 className="text-xl font-semibold">Prescription Refill</h2>
        <p className="mt-2">
          Easily Refill Your Prescription at TRTPEP! Simply enter your shipping
          state and the email associated with your account to get started.
        </p>
        <div className="w-full border border-gray-200 my-6" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <label htmlFor="state"><span className="text-red-500">*</span> Indicates required fields</label>
            <select
              name="state"
              id="state"
              className="border mt-1.5 w-60 p-2 rounded-md text-sm outline-none"
            >
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
              <option value="New York">New York</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Ohio">Ohio</option>
              <option value="Illinois">Illinois</option>
              <option value="Georgia">Georgia</option>
              <option value="North Carolina">North Carolina</option>
              <option value="Michigan">Michigan</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 pt-6">
            <input
              type="email"
              placeholder="david@gmail.com"
              className="p-2.5 text-sm rounded-md border outline-none w-72"
            />
          </div>
        </div>

        <div className="w-full mt-6">
          <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" className="w-3 h-3 mr-2" />
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
    </div>
  );
};

export default ExistingPatientSearchForm;
