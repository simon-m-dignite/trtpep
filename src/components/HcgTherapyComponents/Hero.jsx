import React from "react";

const Hero = () => {
  return (
    <div className="w-full hcg-therapy-header flex flex-col items-center justify-end text-white pb-28 md:pb-20 gap-4 text-center px-4">
      <h2 className="text-5xl font-bold">HCG</h2>
      <p className="text-sm font-semibold">Empower your health with HCG!</p>
      <p className="text-sm font-semibold">
        Just $497.50 for a 2.5-month supply*
      </p>
      <a
        href="#enrollment-form"
        className="bg-color text-white px-4 py-2 rounded-md font-medium"
      >
        Enroll Now
      </a>
    </div>
  );
};

export default Hero;
