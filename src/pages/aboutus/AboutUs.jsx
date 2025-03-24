import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full ">
      <div className="w-full about-us-hero brightness-75"></div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6 px-4">
        <h1 className="text-3xl font-bold uppercase">ABOUT US</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          With over a decade of commitment to the Fitness and Health industry,
          TRTPEP embraces the power of Telemedicine to connect with individuals
          in remote areas, or who simply prefer the convenience of telemedicine,
          putting the choice right in the patient's hands
        </p>
      </div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6 bg-gray-100 px-4">
        <h1 className="text-3xl font-bold uppercase">TELEMEDICINE</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          Our telemedicine approach used technology to establish a
          provider-patient relationship of convenience and quality. This
          innovative approach enables seamless communication with patients,
          labs, specialists, and pharmacies—all at the click of a button.
        </p>
      </div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6 px-4">
        <h1 className="text-3xl font-bold uppercase">OUR MISSION</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          At TRTPEP, we are dedicated to delivering exceptional healthcare. Our
          mission is to empower patients with access to quality prescription
          medications from an FDA approved compounding pharmacy without the
          inconvenience of visiting a doctor's office. We strive to make
          healthcare accessible and hassle-free for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
