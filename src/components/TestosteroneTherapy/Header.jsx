import React from "react";

const Header = () => {
  const scrollToOpenPositions = () => {
    const section = document.getElementById("enrollment-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full testosterone-therapy-header flex flex-col items-center justify-end text-white pb-10 md:pb-20 gap-4 text-center px-4">
      <h1 className="text-9xl font-extrabold">
        <sup className="font-semibold text-lg relative -top-20">$</sup>89{" "}
        <sub className="font-semibold text-lg relative -left-6 -top-1">
          .99 / month
        </sub>
      </h1>
      <h2 className="text-5xl font-semibold">Testosterone Therapy</h2>
      <p className="text-xs font-semibold">
        Includes Initial Consult, Testosterone Cypionate, Anastrozole, Syringes
        and Shipping.
      </p>
      <p className="text-xs font-semibold">NO HIDDEN FEES.</p>
      <p className="text-xs font-semibold">
        *Minimum purchase 2.5 month supply
      </p>
      <button
        type="button"
        onClick={scrollToOpenPositions}
        className="bg-color text-white px-4 py-2 rounded-md font-medium"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default Header;
