import React, { useState } from "react";

const Form = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate first name
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
      valid = false;
    }

    // Validate last name
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    // Validate phone
    if (!phone.trim()) {
      errors.phone = "Phone number is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Construct form data
      const formData = {
        firstName,
        lastName,
        email,
        phone,
      };

      // Send form data to API
      fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle success (e.g., show a success message, clear the form)
          console.log("Success:", data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    }
  };

  return (
    <form
      id="enrollment-form"
      className="w-full flex flex-col items-center text-center gap-4 my-20 lg:w-[60%] mx-auto"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">
        Don’t become another statistic!
      </h1>
      <h2 className="text-xl font-semibold">
        Get started today with the most affordable Testosterone Replacement
        Therapy program in the nation.
      </h2>
      <h3 className="text-2xl font-semibold mt-4">
        ENROLL IN TESTOSTERONE REPLACEMENT THERAPY
      </h3>

      <div className="w-full flex flex-col gap-4 md:gap-6 mt-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
          </div>
          <div className="flex flex-col items-start">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>
          <div className="flex flex-col items-start">
            <input
              type="text"
              placeholder="Phone"
              className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>
        </div>
        <button className="w-full text-white bg-color rounded-md py-3 uppercase text-base font-medium">
          Get Started
        </button>
      </div>
    </form>
  );
};

export default Form;
