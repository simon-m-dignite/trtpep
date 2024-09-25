import React, { useRef, useState } from "react";
import axios from "axios";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { states } from "../../constants/states";

const LabOrdersForm = () => {
  const [errors, setErrors] = useState({});

  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");

  const [paymentSuccessfull, setPaymentSuccessfull] = useState(false);

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
    amount: "125",
    state: "",
  });
  const [isNewPatient, setIsNewPatient] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const captchaRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleRadioInputChange = (e) => {
    setIsNewPatient(e.target.value);
  };

  const {
    firstName,
    lastName,
    email,
    phone,
    date_of_birth,
    shippingState,
    billingAddress,
    billingAddressLine2,
    city,
    zipCode,
    amount,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!isNewPatient) {
      errors.isNewPatient = "Please choose an option";
    }

    if (!data.firstName) {
      errors.firstName = "First name is required";
      valid = false;
    }
    if (!data.lastName) {
      errors.lastName = "Last name is required";
      valid = false;
    }
    if (!data.email) {
      errors.email = "Email is required";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = "Invalid email format";
        valid = false;
      }
    }
    if (!data.phone) {
      errors.phone = "Phone number is required";
      valid = false;
    }
    // dob
    if (!data.date_of_birth) {
      errors.date_of_birth = "Date of birth is required";
      valid = false;
    } else {
      const age = calculateAge(data.date_of_birth);
      if (age < 24) {
        errors.date_of_birth =
          "Patients under 24 are not eligible for treatment";
        valid = false;
      }
    }

    if (!data.shippingState) {
      errors.shippingState = "Shipping state is required";
      valid = false;
    }

    if (!data.state) {
      errors.state = "State is required";
      valid = false;
    }

    if (!data.billingAddress) {
      errors.billingAddress = "Billing address is required";
      valid = false;
    }

    // if (!data.billingAddressLine2) {
    //   errors.billingAddressLine2 = "Billing address line is required";
    //   valid = false;
    // }

    if (!data.city) {
      errors.city = "City is required";
      valid = false;
    }
    if (!data.zipCode) {
      errors.zipCode = "Zip code is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const [captcha, setCaptcha] = useState("");
  const navigate = useNavigate();

  function onChange(value) {
    setCaptcha(value);
    console.log("captcha", value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // captchaRef.current.reset();
    // const inputVal = await e.target[0].value;

    if (validateForm()) {
      if (!stripe || !elements) {
        return;
      }
      setLoading(true);
      const cardElement = elements.getElement(CardElement);

      const { error, token } = await stripe.createToken(cardElement);
      console.log("token >> ", token);
      // https://backend.trtpep.com
      if (token?.id) {
        try {
          axios
            .post("http://localhost:8000/api/create-payment-intent", {
              data: data,
              id: token?.id,
              amount: data.amount,
              firstName,
              lastName,
              email,
              phone,
              date_of_birth,
              shippingState,
              billingAddress,
              billingAddressLine2,
              city,
              zipCode,
              isNewPatient,
              // inputVal,
              captcha,
            })
            .then((response) => {
              console.log(response.data);
              setLoading(false);
              setPaymentStatus("Payment successfull.");
              setPaymentSuccessfull(true);
              setData({
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
                amount: "125",
                state: "",
              });
              window.location.href = "https://azalea-aesthetics.square.site/";
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        } catch (error) {
          console.log("lab order form error >> ", error);
          setLoading(false);
        }
      } else {
        setPaymentStatus("Payment failed. Please try again.");
        setLoading(false);

        console.log("Stripe error >> ", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 md:px-10 lg:px-48 w-full py-16 flex flex-col gap-4"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-start gap-2">
            <input
              type="radio"
              id="New Patient"
              name="New Patient"
              value="New Patient"
              checked={isNewPatient === "New Patient"}
              onChange={handleRadioInputChange}
              className="w-5 h-5"
            />
            <label
              htmlFor="New Patient"
              className="text-sm font-normal text-gray-500"
            >
              New Patient
            </label>
          </div>
          {errors.isNewPatient && (
            <p className="text-red-500 text-sm mt-2">{errors.isNewPatient}</p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-start gap-2">
            <input
              type="radio"
              id={"Old Patient"}
              name={"Old Patient"}
              value={"Old Patient"}
              checked={isNewPatient === "Old Patient"}
              onChange={handleRadioInputChange}
              className="w-5 h-5"
            />
            <label
              htmlFor="Old Patient"
              className="text-sm font-normal text-gray-500"
            >
              Old Patient
            </label>
          </div>
          {errors.isNewPatient && (
            <p className="text-red-500 text-sm">{errors.isNewPatient}</p>
          )}
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
          {/* <p className="text-[13px] text-red-500">
            Patients under 24 not eligible for treatment
          </p> */}
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
            {states.map((s, index) => {
              return (
                <option value={s} key={index}>
                  {s}
                </option>
              );
            })}
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
        {/* {errors.billingAddressLine2 && (
          <p className="text-red-500 text-sm">{errors.billingAddressLine2}</p>
        )} */}
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
          <label htmlFor="state" className="text-gray-500 text-sm">
            State
          </label>
          <select
            name="state"
            id="state"
            value={data.state}
            onChange={handleChange}
            className="w-full text-sm border py-2 rounded px-2 outline-none"
          >
            {states.map((s, index) => {
              return (
                <option value={s} key={index}>
                  {s}
                </option>
              );
            })}
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state}</p>
          )}
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
      <CardElement />
      <div className="w-full flex flex-col items-start gap-1 mt-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Authorization <span className="text-red-500">*</span>
        </p>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="authorization"
            id="authorization"
            checked={isChecked}
            onChange={checkHandler}
          />
          <label
            htmlFor="authorization"
            className={`text-sm text-gray-500 ${isChecked && "font-semibold"}`}
          >
            I authorize my credit card to be charged for the agreed upon
            purchase.
          </label>
        </div>
      </div>
      <div className="w-full">
        <ReCAPTCHA
          sitekey="6LcV_yYqAAAAAPcoQt5-z9mmXfj__xje9jb6JK1a"
          onChange={onChange}
          ref={captchaRef}
        />

        {errors.captcha && (
          <p className="text-red-500 text-sm">{errors.captcha}</p>
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-black mb-2">Total</p>
        <p className="text-[#c00000] font-semibold mb-2 text-base">$124.95</p>
        <button
          type="submit"
          className="px-4 py-2 mt-4 rounded-md text-sm font-medium bg-color text-white"
        >
          {loading ? "Loading..." : "Pay Now"}
        </button>
      </div>
      {paymentSuccessfull && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="w-full lg:w-auto border bg-white rounded-xl p-8 lg:py-16 lg:px-28 flex flex-col items-center justify-center relative">
            <button
              className="absolute top-4 right-4 w-6 h-6 bg-gray-400/20 rounded-full flex items-center justify-center"
              onClick={() => setPaymentSuccessfull(false)}
            >
              <IoClose className="text-xl" />
            </button>
            <div className="w-[64px] h-[64px] rounded-full bg-red-50 flex items-center justify-center">
              <FaCheck className="text-[30px] text-red-600" />
            </div>
            <h3 className="font-semibold text-xl mt-4">Payment Successfull</h3>
          </div>
        </div>
      )}
    </form>
  );
};

export default LabOrdersForm;
