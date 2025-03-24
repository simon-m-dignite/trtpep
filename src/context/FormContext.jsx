import React, { createContext, useContext, useState } from "react";

// Create a Context for the form data
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    provider: "",
    therapy: "",
    labWork: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    sameAsShipping: false,
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const [error, setError] = useState({
    provider: false,
    therapy: false,
    labWork: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    dateOfBirth: false,
    streetAddress: false,
    addressLine2: false,
    city: false,
    state: false,
    zipCode: false,
    sameAsShipping: false,
    streetAddress: false,
    addressLine2: false,
    city: false,
    state: false,
    zipCode: false,
    formError: false,
  });

  const therapyValidator = () => {
    if (formData.provider === "") {
      setError((values) => ({
        ...values,
        ["provider"]: "Please select a provider.",
      }));
      return false;
    }
    return true;
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const [clientSecret, setClientSecret] = useState("");

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        clientSecret,
        setClientSecret,
        therapyValidator,
        error,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
