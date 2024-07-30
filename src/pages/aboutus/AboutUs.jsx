import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-full about-us-hero brightness-75"></div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold uppercase">ABOUT US</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          With over a decade of commitment to the Fitness and Health industry,
          TRTPEP embraces the power of Telemedicine to connect with individuals
          in remote areas—a possibility previously out of reach. We advocate
          that Alternative healthcare solutions should be accessible to all, not
          just a choice.
        </p>
      </div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6 bg-gray-100">
        <h1 className="text-3xl font-bold uppercase">TELEMEDICINE</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          Telemedicine leverages telecommunications technologies to deliver
          healthcare remotely. Through video consultations and E-visits,
          patients can bridge the gap between themselves and their physicians.
          This innovative approach enables seamless communication with patients,
          labs, specialists, and pharmacies—all at the click of a button.
        </p>
      </div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold uppercase">OUR MISSION</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          At TRTPEP, we are dedicated to delivering exceptional healthcare. Our
          mission is to empower patients with access to quality prescription
          medications without the inconvenience of visiting a doctor's office.
          We strive to make healthcare accessible and hassle-free for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
