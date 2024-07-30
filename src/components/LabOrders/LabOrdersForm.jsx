import React, { useState } from "react";
import axios from "axios"

const LabOrdersForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [newPatient, setNewPatient] = useState("");
  const [oldPatient, setOldPatient] = useState("");
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date_of_birth: "",
    shippingState: "",
    billingAddress: "",
    billingAddressLine2: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardExpirationYear: "",
    securityCard: "",
    cardholderName: "",
    amount: "124.95",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const [patientType, setPatientType] = useState("");

  const handleRadioChange = (event) => {
    setPatientType(event.target.value);
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
      valid = false;
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
      valid = false;
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = "Invalid email format";
        valid = false;
      }
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
      valid = false;
    }
    if (!data.date_of_birth.trim()) {
      errors.date_of_birth = "Date of birth is required";
      valid = false;
    }
    if (!data.shippingState.trim()) {
      errors.shippingState = "Shipping state is required";
      valid = false;
    }
    if (!data.billingAddress.trim()) {
      errors.billingAddress = "Billing address is required";
      valid = false;
    }
    if (!data.city.trim()) {
      errors.city = "City is required";
      valid = false;
    }
    if (!data.zipCode.trim()) {
      errors.zipCode = "Zip code is required";
      valid = false;
    }
    if (!data.cardNumber.trim()) {
      errors.cardNumber = "Card number is required";
      valid = false;
    }
    if (!data.cardExpirationDate.trim()) {
      errors.cardExpirationDate = "Card expiration date is required";
      valid = false;
    }
    if (!data.cardExpirationYear.trim()) {
      errors.cardExpirationYear = "Card expiration year is required";
      valid = false;
    }
    if (!data.securityCard.trim()) {
      errors.securityCard = "Security card is required";
      valid = false;
    }
    if (!data.cardholderName.trim()) {
      errors.cardholderName = "Cardholder name is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const requestData = {
        newPatient,
        oldPatient,
        data,
      };
      try {
         axios.post(
          "https://kzmmw7nf-8000.inc1.devtunnels.ms/create-payment-intent",
          {
            
             requestData,
          }
        ).then((response)=>{
          console.log(response)
        }).catch((error)=>{
          console.log(error)
        });

        console.log("new patient >> ", newPatient);
        console.log("old patient >> ", oldPatient);
        console.log("data >> ", resp);
      } catch (error) {
        console.log("lab order form error >> ", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 md:px-10 lg:px-48 w-full py-16 flex flex-col gap-4"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center justify-start gap-2">
          <input
            type="radio"
            name="patientType"
            value="oldPatient"
            checked={patientType === "oldPatient"}
            onChange={handleRadioChange}
            className="w-5 h-5"
          />
          <label
            htmlFor="newPatient"
            className="text-sm font-normal text-gray-500"
          >
            New Patient
          </label>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input
            type="radio"
            name="patientType"
            id="newPatient"
            value="newPatient"
            checked={patientType === "newPatient"}
            onChange={handleRadioChange}
            className="w-5 h-5"
          />
          <label
            htmlFor="newPatient"
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
          <label htmlFor="FirstName" className="text-gray-500 text-sm">
            First
          </label>
          <input
            type="text"
            name="firstName"
            id="FirstName"
            value={data.firstName}
            onChange={handleChange}
            className="w-full border py-2 rounded px-2 outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="LastName" className="text-gray-500 text-sm">
            Last
          </label>
          <input
            type="text"
            name="lastName"
            id="LastName"
            value={data.lastName}
            onChange={handleChange}
            className="w-full border py-2 rounded px-2 outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-500"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full border py-2 rounded px-2 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-500"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="w-full border py-2 rounded px-2 outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="date_of_birth"
            className="text-sm font-semibold text-gray-500"
          >
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <p className="text-[13px] text-red-500">
            Patients under 24 not eligible for treatment
          </p>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={data.date_of_birth}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
          {errors.date_of_birth && (
            <p className="text-red-500 text-sm">{errors.date_of_birth}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="shippingState"
            className="text-sm font-semibold text-gray-500"
          >
            Shipping State <span className="text-red-500">*</span>
          </label>
          <select
            name="shippingState"
            id="shippingState"
            value={data.shippingState}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            {/* Add options here */}
            <option value="">Select You State</option>
            <option value="state1">State1</option>
            <option value="state2">State2</option>
            <option value="state3">State3</option>
            <option value="state4">State4</option>
            <option value="state5">State5</option>
            <option value="state6">State6</option>
          </select>
          {errors.shippingState && (
            <p className="text-red-500 text-sm">{errors.shippingState}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 mt-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Billing Address <span className="text-red-500">*</span>
        </p>
        <label htmlFor="billingAddress" className="text-gray-500 text-sm">
          Street Address
        </label>
        <input
          type="text"
          name="billingAddress"
          id="billingAddress"
          value={data.billingAddress}
          onChange={handleChange}
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
        {errors.billingAddress && (
          <p className="text-red-500 text-sm">{errors.billingAddress}</p>
        )}
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="billingAddressLine2" className="text-gray-500 text-sm">
          Address Line 2
        </label>
        <input
          type="text"
          name="billingAddressLine2"
          id="billingAddressLine2"
          value={data.billingAddressLine2}
          onChange={handleChange}
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
            id="city"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="city" className="text-gray-500 text-sm">
            State
          </label>
          <select
            name="city"
            id="city"
            value={data.city}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            {/* Add options here */}
            <option value="">Select You State</option>
            <option value="state1">State1</option>
            <option value="state2">State2</option>
            <option value="state3">State3</option>
            <option value="state4">State4</option>
            <option value="state5">State5</option>
            <option value="state6">State6</option>
          </select>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="zipCode" className="text-gray-500 text-sm">
            Zip Code
          </label>
          <input
            type="number"
            name="zipCode"
            id="zipCode"
            value={data.zipCode}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm">{errors.zipCode}</p>
          )}
        </div>
        <div></div>
      </div>
      {/* payment info */}
      <div className="flex flex-col items-start gap-2 mt-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Payment Info <span className="text-red-500">*</span>
        </p>
        <label htmlFor="cardNumber" className="text-gray-500 text-sm">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleChange}
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label htmlFor="cardExpirationDate" className="text-gray-500 text-sm">
            Expiration Date
          </label>
          <select
            name="cardExpirationDate"
            id="cardExpirationDate"
            value={data.cardExpirationDate}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            <option value="month">Month</option>
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
          {errors.cardExpirationDate && (
            <p className="text-red-500 text-sm">{errors.cardExpirationDate}</p>
          )}
        </div>
        <div>
          <label htmlFor="cardExpirationYear" className="text-gray-500 text-sm">
            Year
          </label>
          <select
            name="cardExpirationYear"
            id="cardExpirationYear"
            value={data.cardExpirationYear}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            <option value="year">Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          {errors.cardExpirationYear && (
            <p className="text-red-500 text-sm">{errors.cardExpirationYear}</p>
          )}
        </div>
        <div>
          <label htmlFor="securityCard" className="text-gray-500 text-sm">
            Security Card
          </label>
          <input
            type="text"
            id="securityCard"
            name="securityCard"
            value={data.securityCard}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
          {errors.securityCard && (
            <p className="text-red-500 text-sm">{errors.securityCard}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="cardholderName" className="text-gray-500 text-sm">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={data.cardholderName}
          onChange={handleChange}
          className="w-full text-sm border py-2 rounded px-2 outline-none"
        />
        {errors.cardholderName && (
          <p className="text-red-500 text-sm">{errors.cardholderName}</p>
        )}
        <p className="text-xs text-gray-600">
          Please make sure to type your name as listed on your credit card in
          the Cardholder Name field.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-black mb-2">Total</p>
        <p className="text-[#c00000] font-semibold mb-2 text-base">$124.95</p>
        <button
          type="submit"
          className="px-4 py-2 mt-4 rounded-md text-sm font-medium bg-color text-white"
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default LabOrdersForm;
