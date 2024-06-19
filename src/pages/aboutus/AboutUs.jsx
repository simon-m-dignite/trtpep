import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-full about-us-hero brightness-75"></div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold uppercase">ABOUT US</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          TRT Nation has been involved in the Fitness and Health industry for
          over 10 years. The advent of Telemedicine has enabled us to reach
          people in distant areas that prior to this would not have been
          possible. We believe that Alternative health care solutions should not
          just be an option, but an available option for everyone.
        </p>
      </div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6 bg-gray-200">
        <h1 className="text-3xl font-bold uppercase">TELEMEDICINE</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          Tele-medicine is the use of telecommunication technologies to provide
          healthcare remotely. With video consultations and E -visits a patient
          can now remove the distance between themselves and their physician.
          Tele-medicine has made it possible to communicate with patients, labs,
          specialists and pharmacies all with the click of a button.
        </p>
      </div>
      <div className="w-full py-12 lg:py-14 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold uppercase">OUR MISSION</h1>
        <p className="text-gray-500 lg:w-[50%] text-center">
          At TRT Nation our goal is to provide exceptional healthcare while
          offering the patient the right to quality prescription medication
          without the hassle of visiting a doctors office.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
