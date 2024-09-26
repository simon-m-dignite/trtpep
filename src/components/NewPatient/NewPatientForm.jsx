import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import TherapyForm from "./TherapyForm";
import LabWorkForm from "./LabWorkForm";
import PatientInfoForm from "./PatientInfoForm";
import ShippingInfoForm from "./ShippingInfoForm";
import PaymentInfoForm from "./PaymentInfoForm";
import { styles } from "../../styles/styles";
import Cookies from "js-cookie";

// Make sure to replace with your own Stripe publishable key
const stripePromise = loadStripe(
  "pk_live_51PgBFIFEWeqdZ67FPXnja4B7NRo3wSz2jLtCbrpQFjrS2xFbNFYBwqCaTmTa7SK5UVREhGtsCgCTjhhvHIz9csxY005hw9MlbV"
);
// const stripePromise = loadStripe(
//   "pk_test_51PiQ2kRv1Ud7Q4L2gaztmYGBANqXoUjX6VPvEffqs2AExjN0wcRK8pxRuS1DZ15B2CaRm7gEJ6YDt3eGyDSoJF9X00AxzW8Bxr"
// );

function NewPatientForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [formData, setFormData] = useState({
    therapyDetails: {
      testosterone: "",
      peptide: "",
      hcg: null,
      weightLoss: "",
    },
    labWorkDetails: {
      bloodWorkForTestosterone: "",
      howDidHear: "",
    },
    patientInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
    },
    shippingInfo: {
      shippingStreetAddress: "",
      shippingAddressLine: "",
      shippingCity: "",
      shippingState: "",
      shippingZipCode: "",
    },
    billingInfo: {
      billingStreetAddress: "",
      billingAddressLine: "",
      billingCity: "",
      billingState: "",
      billingZipCode: "",
    },
    isBillingSameAsShipping: false,
  });

  const calculateTotalPrice = (formData) => {
    let totalPrice = 0;

    Object.values(formData.therapyDetails).forEach((item) => {
      totalPrice += item?.price || 0;
    });

    Object.values(formData.labWorkDetails).forEach((item) => {
      totalPrice += item?.price || 0;
    });

    return totalPrice;
  };

  const [paymentStatus, setPaymentStatus] = useState("");

  const handleRadioChange = (category, title, price) => {
    setFormData((prevState) => ({
      ...prevState,
      therapyDetails: {
        ...prevState.therapyDetails,
        [category]: { title, price },
      },
    }));
  };

  const handleRadioChange2 = (category, title, price) => {
    setFormData((prevState) => ({
      ...prevState,
      labWorkDetails: {
        ...prevState.labWorkDetails,
        [category]: { title, price },
      },
    }));
  };

  const handlePatientInfo = (category, title, price) => {
    setFormData((prevState) => ({
      ...prevState,
      patientInfo: {
        ...prevState.patientInfo,
        [category]: { title, price },
      },
    }));
  };

  const handleShippingInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      shippingInfo: {
        ...prevData.shippingInfo,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      billingInfo: {
        ...prevData.billingInfo,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const requestData = {
        formData,
        amount: calculateTotalPrice(formData),
      };

      console.log("Data being sent:", JSON.stringify(requestData, null, 2));
      // https://backend.trtpep.com
      // "https://backend.trtpep.com/api/new-patient"
      const response = await fetch(
        "https://backend.trtpep.com/api/new-patient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const resp = await response.json();
      console.log("Payment successful", resp);
      Cookies.set("patientId", resp?.data?._id);
      // alert(resp.message);
      window.location.href = resp?.url;
    } catch (error) {
      setPaymentStatus("Payment failed. Please try again.");
      console.log("Payment error >> ", error);
      return false;
    }
  };

  const steps = [
    {
      count: 1,
      title: "Therapy",
      content: (
        <TherapyForm
          formData={formData}
          setFormData={setFormData}
          handleRadioChange={handleRadioChange}
        />
      ),
    },
    {
      count: 2,
      title: "Lab Work",
      content: (
        <LabWorkForm
          formData={formData}
          setFormData={setFormData}
          handleRadioChange={handleRadioChange2}
        />
      ),
    },
    {
      count: 3,
      title: "Patient Info",
      content: (
        <PatientInfoForm
          formData={formData}
          setFormData={setFormData}
          handlePatientInfo={handlePatientInfo}
        />
      ),
    },
    {
      count: 4,
      title: "Billing & Shipping",
      content: (
        <ShippingInfoForm
          formData={formData}
          setFormData={setFormData}
          handleShippingInfoChange={handleShippingInfoChange}
          handleBillingInfoChange={handleBillingInfoChange}
        />
      ),
    },
    {
      count: 5,
      title: "Payment",
      content: (
        <PaymentInfoForm onSubmit={handleSubmit} totalAmount={totalAmount} />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    console.log("formData >> ", formData);
    const totalPrice = calculateTotalPrice(formData);
    setTotalAmount(calculateTotalPrice(formData));
  }, [formData]);

  return (
    <Elements stripe={stripePromise}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`multi-step-form w-full ${styles.paddingHorizontal} py-12 flex flex-col gap-6 lg:w-[85%] xl:w-[85%] mx-auto`}
      >
        <h2 className="text-xs text-gray-500">
          Fields marked with * are required.
        </h2>
        <ul className="step-headers flex flex-col items-start lg:flex-row lg:items-center justify-between gap-y-2 gap-x-10 border-b pb-4">
          {steps.map((step, index) => (
            <li key={index}>
              <button
                type="button"
                disabled={currentStep === index + 1 ? true : false}
                className={`step-heading flex items-center gap-1 cursor-auto ${
                  currentStep === index + 1 ? `enabled` : `disabled`
                }`}
              >
                <div
                  className={`w-5 h-5 bg-color rounded-full flex items-center justify-center text-white text-xs ${
                    currentStep === index + 1 ? "opacity-100" : "opacity-25"
                  }`}
                >
                  <span>{step.count}</span>
                </div>
                <span
                  className={`text-sm ${
                    currentStep === index + 1 ? "opacity-100" : "opacity-25"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="step-content">{steps[currentStep - 1].content}</div>
        {currentStep !== steps?.length && (
          <div className="mt-4">
            <p className="font-semibold text-base text-[#c00000]">Total</p>
            <p className="font-normal mt-2 text-base">${totalAmount}</p>
          </div>
        )}

        <div className="form-actions flex items-center gap-3">
          {currentStep > 1 && currentStep !== steps?.length && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-color text-white rounded-md text-sm px-4 py-2"
            >
              Back
            </button>
          )}
          {currentStep === steps.length ? null : (
            <button
              type="button"
              onClick={handleNext}
              className="bg-color text-white rounded-md text-sm px-4 py-2"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </Elements>
  );
}

export default NewPatientForm;
