import React from "react";
import NewPatientForm from "../../components/NewPatient/NewPatientForm";

const NewPatient = () => {
  return (
      <>
    <div className="w-full">
      <div className="bg-gray-800 w-full h-[50vh] flex items-center justify-center pt-20 text-center">
        <h1 className="uppercase text-4xl font-bold text-white">
          NEW PATIENT PAYMENT FORM
        </h1>
      </div>
      <NewPatientForm/>
    </div>
      </>
  );
};

export default NewPatient;
