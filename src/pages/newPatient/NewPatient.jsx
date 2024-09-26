import React from "react";
import NewPatientForm from "../../components/NewPatient/NewPatientForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const NewPatient = () => {
  const stripePromise = loadStripe(
    "pk_live_51PfNP3DaXqcGQAlF4pv2Vd0U3LvOxLGdw7HnlTGYQtoZciZbxNfF1Oa50kyKRtNq3qCtEYntG1i2e458DtwrxHTK00NnIP0Jvs"
  );
  // const stripePromise = loadStripe(
  //   "pk_test_51PiQ2kRv1Ud7Q4L2gaztmYGBANqXoUjX6VPvEffqs2AExjN0wcRK8pxRuS1DZ15B2CaRm7gEJ6YDt3eGyDSoJF9X00AxzW8Bxr"
  // );
  return (
    // <Elements stripe={stripePromise}>
    <div className="w-full">
      <div className="bg-gray-800 new-patient-hero w-full h-[50vh] flex items-center justify-center pt-20 text-center">
        <h1 className="uppercase text-4xl font-bold text-white">
          NEW PATIENT PAYMENT FORM
        </h1>
      </div>
      <NewPatientForm />
    </div>
    // </Elements>
  );
};

export default NewPatient;
