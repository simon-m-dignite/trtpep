import React, { createContext, useContext, useState } from 'react';

// Create a Context for the form data
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    provider: '',
    therapy: '',
    labWork: '',
    patientInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: ''
    },
    shippingInfo: {
      streetAddress: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: ''
    },
    billingInfo: {
      sameAsShipping: false,
      streetAddress: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: ''
    },
    paymentInfo: {
      cardNumber: '',
      expirationDate: '',
      expirationYear: '',
      securityCode: '',
      cardholderName: ''
    }
  });

  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
