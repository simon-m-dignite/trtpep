import React from "react";

const LabOrdersForm = () => {
  return (
    <div className="px-4 md:px-10 lg:px-48 w-full py-16 flex flex-col gap-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center justify-start gap-2">
          <input type="radio" name="" id="" className="w-5 h-5" />
          <label
            htmlFor="new-patient"
            className="text-sm font-normal text-gray-500"
          >
            New Patient
          </label>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="radio" name="" id="" className="w-5 h-5" />
          <label
            htmlFor="new-patient"
            className="text-sm font-normal text-gray-500"
          >
            Old Patient
          </label>
        </div>
      </div>
      <div>
        <label
          htmlFor="full-name"
          className="text-sm font-semibold text-gray-500"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="First" className="text-gray-500 text-sm">
            First
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="First" className="text-gray-500 text-sm">
            Last
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-gray-500"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-gray-500"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-gray-500"
          >
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <p className="text-[13px] text-red-500">
            Patients under 24 not eligible for treatment
          </p>
          <input
            type="date"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-gray-500"
          >
            Shipping State <span className="text-red-500">*</span>
          </label>
          <select
            name="shipping-state"
            id="shipping-state"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          ></select>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 mt-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Billing Address <span className="text-red-500">*</span>
        </p>
        <label htmlFor="full-name" className="text-gray-500 text-sm">
          Street Address
        </label>
        <input
          type="text"
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="full-name" className="text-gray-500 text-sm">
          Address Line 2
        </label>
        <input
          type="text"
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="city" className="text-gray-500 text-sm">
            City
          </label>
          <input
            type="text"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="state" className="text-gray-500 text-sm">
            State
          </label>
          <select
            name="state"
            id="state"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          ></select>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="zip-code" className="text-gray-500 text-sm">
            Zip Code
          </label>
          <input
            type="text"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
        </div>
        <div></div>
      </div>
      {/* payment info */}
      <div className="flex flex-col items-start gap-2 mt-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Payment Info <span className="text-red-500">*</span>
        </p>
        <label htmlFor="card-number" className="text-gray-500 text-sm">
          Card Number
        </label>
        <input
          type="text"
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label
            htmlFor="card-expiration-date"
            className="text-gray-500 text-sm"
          >
            Expiration Date
          </label>
          <select
            name="card-expiration-date"
            id="card-expiration-date"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            <option value="month" selected>
              Month
            </option>
            <option value="Jan">1</option>
            <option value="Feb">2</option>
            <option value="Mar">3</option>
            <option value="Apr">4</option>
            <option value="May">5</option>
            <option value="Jun">6</option>
            <option value="July">7</option>
            <option value="Aug">8</option>
            <option value="Sep">9</option>
            <option value="Oct">10</option>
            <option value="Nov">11</option>
            <option value="Dec">12</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="card-expiration-date"
            className="text-gray-500 text-sm"
          >
            Year
          </label>
          <select
            name="card-expiration-year"
            id="card-expiration-year"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            <option value="year" selected>
              Year
            </option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="card-expiration-date"
            className="text-gray-500 text-sm"
          >
            Security Card
          </label>
          <input
            type="text"
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="card-expiration-date" className="text-gray-500 text-sm">
          Cardholder Name
        </label>
        <input
          type="text"
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
        <p className="text-xs text-gray-600">
          Please make sure to type your name as listed on your credit card in
          the Cardholder Name field.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-black mb-2">Total</p>
        <p className="text-blue-900 font-semibold mb-2 text-base">$129</p>
        <button className="px-4 py-2 mt-4 rounded-md text-sm font-medium bg-blue-900 text-white">Pay Now</button>
      </div>
    </div>
  );
};

export default LabOrdersForm;
