import React, { useState } from "react";
import { styles } from "../../styles/styles";
import TherapyForm from "./TherapyForm";
import LabWorkForm from "./LabWorkForm";
import PatientInfoForm from "./PatientInfoForm";
import ShippingInfoForm from "./ShippingInfoForm";
import PaymentInfoForm from "./PaymentInfoForm";
import ChooseAProviderForm from "./ChooseAProviderForm";

function NewPatientForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initial state values for each form
    provider: "",
    therapyDetails: {},
    labWorkDetails: {},
    patientInfo: {},
    shippingInfo: {},
    paymentInfo: {},
  });

  const steps = [
    {
      count: 1,
      title: "Choose A Provider",
      content: <ChooseAProviderForm />,
    },
    {
      count: 2,
      title: "Therapy",
      content: <TherapyForm />,
    },
    {
      count: 3,
      title: "Lab Work",
      content: <LabWorkForm />,
    },
    {
      count: 4,
      title: "Patient Info",
      content: <PatientInfoForm />,
    },
    {
      count: 5,
      title: "Billing & Shipping",
      content: <ShippingInfoForm />,
    },
    {
      count: 6,
      title: "Payment",
      content: <PaymentInfoForm />,
    },
  ];

  const handleFormChange = (formKey) => (updatedData) => {
    setFormData((prevData) => ({
      ...prevData,
      [formKey]: updatedData,
    }));
  };

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

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <div
      className={`multi-step-form w-full ${styles.paddingHorizontal} py-12 flex flex-col gap-6 lg:w-[85%] xl:w-[85%] mx-auto`}
    >
      <h2 className="text-xs text-gray-500">
        Fields marked with * are required.
      </h2>
      <ul className="step-headers flex flex-col items-start lg:flex-row lg:items-center justify-between gap-y-2 gap-x-10 border-b pb-4">
        {steps.map((step, index) => (
          <li key={index}>
            <button
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

      <div className="mt-4">
        <p className="font-semibold text-base text-[#c00000]">Total</p>
        <p className="font-normal mt-2 text-base">$250</p>
      </div>

      <div className="form-actions flex items-center gap-3">
        {currentStep === 1 ? (
          <></>
        ) : (
          <button
            type="button"
            disabled={currentStep === 1}
            onClick={handleBack}
            className="bg-color text-white rounded-md text-sm px-4 py-2"
          >
            Back
          </button>
        )}

        <button
          type="button"
          onClick={handleNext}
          className="bg-color text-white rounded-md text-sm px-4 py-2"
        >
          {currentStep === steps.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default NewPatientForm;
