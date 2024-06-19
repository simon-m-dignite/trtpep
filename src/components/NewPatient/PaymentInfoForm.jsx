import React from "react";

const PaymentInfoForm = ({onSubmit}) => {
  return (
    <div>
        <div className="mb-4">
        <p className="font-semibold text-base text-blue-900">Total</p>
        <p className="font-normal mt-2 text-base">$250</p>
      </div>

      <div className="flex flex-col items-start gap-1 mt-4">
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
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        <div className="flex flex-col items-start gap-1">
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
        <div className="flex flex-col items-start gap-1">
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
        <div className="flex flex-col items-start gap-1">
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
      <div className="flex flex-col items-start gap-1 mt-3">
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
    </div>
  );
};

export default PaymentInfoForm;
