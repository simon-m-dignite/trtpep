import React from "react";

const Header = () => {
  return (
    <main className="w-full tesamoraline-therapy flex flex-col items-center justify-center text-white pt-36 gap-3 px-6 text-center">
      <h1 className="text-4xl text-center md:text-6xl font-semibold">
        TESAMORELIN THERAPY
      </h1>
      <h5 className="font-semibold text-sm tracking-wide mt-4">
        Elevate Your Vitality, Embrace Renewal
      </h5>
      <h6 className="text-xs font-medium tracking-wide">
        Growth Hormone Peptides for only $233/Month *3 Months Minimum Order
      </h6>
      <a
        href="#enrollment-form"
        className="bg-color text-white px-8 py-3 tracking-wide rounded-lg text-base font-medium mt-5"
      >
        Enroll Now
      </a>
    </main>
  );
};

export default Header;
