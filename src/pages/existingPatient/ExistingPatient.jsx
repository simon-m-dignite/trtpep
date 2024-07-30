import React from "react";
import ExistingPatientSearchForm from "../../components/ExistingPatient/ExistingPatientSearchForm";

const ExistingPatient = () => {
  return (
    <div className="w-full existing-patient">
      <div className="bg-gray-800 w-full h-[70vh] flex items-center justify-center pt-20 text-center existing-patient">
        <h1 className="uppercase text-4xl font-bold text-white">
          PATIENT REFILL FORM
        </h1>
      </div>
      <ExistingPatientSearchForm />
    </div>
  );
};

export default ExistingPatient;
