import React, { useState } from "react";
import { styles } from "../../styles/styles";
import TherapyForm from "./TherapyForm";
import LabWorkForm from "./LabWorkForm";
import PatientInfoForm from "./PatientInfoForm";
import ShippingInfoForm from "./ShippingInfoForm";
import PaymentInfoForm from "./PaymentInfoForm";

function NewPatientForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { count: 1, title: "Therapy", content: <TherapyForm /> },
    { count: 2, title: "Lab Work", content: <LabWorkForm /> },
    { count: 3, title: "Patient Info", content: <PatientInfoForm /> },
    { count: 4, title: "Billing & Shipping", content: <ShippingInfoForm /> },
    {
      count: 5,
      title: "Payment",
      content: <PaymentInfoForm onSubmit={() => handleSubmit()} />,
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

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div
      className={`multi-step-form w-full ${styles.paddingHorizontal} py-12 flex flex-col gap-6 lg:w-[60%] mx-auto`}
    >
      <h2 className="text-xs text-gray-500">Fields marked with * are required.</h2>
      <ul className="step-headers flex flex-col items-start lg:flex-row lg:items-center justify-between gap-y-2 gap-x-10 border-b pb-4">
        {steps.map((step, index) => (
          <li key={index}>
            <button
              className={`step-heading flex items-center gap-1 cursor-auto ${
                currentStep === index + 1 ? `text-red-500` : ``
              }`}
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                <span>{step.count}</span>
              </div>
              <span className="text-sm">{step.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="step-content">{steps[currentStep - 1].content}</div>

      
      <div className="mt-4">
        <p className="font-semibold text-base text-blue-900">Total</p>
        <p className="font-normal mt-2 text-base">$250</p>
      </div>

      <div className="form-actions flex items-center gap-3">
        {currentStep === 1 ? <></>:  <button type="button" disabled={currentStep === 1} onClick={handleBack} className="bg-blue-900 text-white rounded-md text-sm px-4 py-2">
          Back
        </button>}
       
        <button type="button" onClick={handleNext} className="bg-blue-900 text-white rounded-md text-sm px-4 py-2">
          {currentStep === steps.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

function BasicInfoForm() {
  // ... Form fields and logic for basic information
  return (
    <h1>Basic Form</h1>
  )
}

function ContactDetailsForm() {
  // ... Form fields and logic for contact details
  return (
    <h1>Basic Contact Details Form</h1>
  )
}

function PreferencesForm() {
  // ... Form fields and logic for preferences
  return (
    <h1>Basic Preferences Form</h1>
  )
}

function ReviewForm() {
  // ... Logic to display submitted information for review
  return (
    <h1>Basic Review Form</h1>
  )
}

function SubmitForm({ onSubmit }) {
  // ... Submit button and logic (optional)
  return (
    <button type="button" onClick={onSubmit}>
      Submit
    </button>
  );
}

export default NewPatientForm;
