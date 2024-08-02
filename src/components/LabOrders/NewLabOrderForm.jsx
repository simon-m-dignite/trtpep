import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useFormContext } from "../../context/FormContext";
import CheckoutForm from "./CheckoutForm";

const NewLabOrderForm = () => {
    const [selectedOption, setSelectedOption] = useState("");
  const [newPatient, setNewPatient] = useState("");
  const [oldPatient, setOldPatient] = useState("");
  const [errors, setErrors] = useState({});

  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");

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
    cvc: "",
    cardholderName: "",
    amount: "1240",
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
    if (!data.cvc.trim()) {
      errors.cvc = "CVC is required";
      valid = false;
    }
    if (!data.cardholderName.trim()) {
      errors.cardholderName = "Cardholder name is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const { setClientSecret, clientSecret } = useFormContext();

  const getClientSecret = () => {
    axios
      .post("http://localhost:8000/api/get-client-secret", {
        amount: 5000,
      })
      .then((response) => {
        setClientSecret(response?.data?.clientSecret);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   console.log("Here")
    // getClientSecret();
    const { error, paymentIntent, token } = await stripe.confirmPayment({
      elements
    });

    console.log(token)

    if (error) {
      // Show error to your customer (e.g., insufficient funds)
      setPaymentStatus(`Payment failed: ${error.message}`);
      console.log(error);
    } else if (paymentIntent) {
      // Payment successful
      if (paymentIntent.status === "succeeded") {
        try {
          axios
            .post("http://localhost:8000/api/create-payment-intent", {
              data: data,
            })
            .then((response) => {
              console.log(response);
              setPaymentStatus("Payment successful!");
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log("lab order form error >> ", error);
        }
      } else {
        setPaymentStatus(
          "Payment processing, please check your account later."
        );
      }
    }
    // }
    //  else {
    //   setPaymentStatus("Payment failed. Please try again.");
    //   console.log("Stripe error >> ", error);
    // }
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

          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={data.date_of_birth}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
          <p className="text-[13px] text-red-500">
            Patients under 24 not eligible for treatment
          </p>
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

      <p className="text-sm font-semibold text-gray-500 mb-2">
        Payment Info <span className="text-red-500">*</span>
      </p>
      {clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <CheckoutForm />
        </Elements>
      ) : null}
      {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <div className="flex flex-col items-start gap-2">
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
      </div> */}

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="cardExpirationDate" className="text-gray-500 text-sm">
            Expiration Date
          </label>
          <input
            type="date"
            name="cardExpirationDate"
            id="cardExpirationDate"
            value={data.cardExpirationDate}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />

          {errors.cardExpirationDate && (
            <p className="text-red-500 text-sm">{errors.cardExpirationDate}</p>
          )}
        </div>
        <div>
          <label htmlFor="cvc" className="text-gray-500 text-sm">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={data.cvc}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          />
          {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
        </div>
      </div> */}

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
  )
}

export default NewLabOrderForm
