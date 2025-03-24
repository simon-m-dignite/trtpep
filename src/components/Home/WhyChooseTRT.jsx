import React from "react";
import { styles } from "../../styles/styles";

const WhyChooseTRT = () => {
  return (
    <section
      className={`w-full px-4 md:px-12 lg:px-36 py-12 lg:py-20 bg-gray-50`}
    >
      <div className="w-full flex flex-col items-center justify-center gap-y-14">
        <h1 className="uppercase text-black text-4xl font-semibold text-center">
          Experience the TRTPEP Advantage
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 gap-y-6">
          <div className="w-full flex flex-col items-start gap-3">
            <img
              src="/FastEnrollment.jpg"
              alt=""
              className="rounded-[10px] h-[290px] w-[380px] bg-cover brightness-90"
            />
            <div className="w-full flex flex-col items-start gap-3 px-4 pb-4">
              <h5 className="text-black font-semibold text-xl mt-2">
                Lightning-Fast Enrollment
              </h5>
              <p className="text-gray-500">
                Sign up on-line right here in just a few minutes!
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <img
              src="/consultation.jpg"
              alt=""
              className="rounded-[10px] h-[290px] w-[380px] bg-cover brightness-90"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h5 className="text-black font-semibold text-xl mt-2">
                Expert Consultations
              </h5>
              <p className="text-gray-500 text-start">
                Complete your history intake, privacy form and needed consents
                right on-line, and receive email confirmation of your provider
                appointment.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <img
              src="/SpeedyDelivery.jpg"
              alt=""
              className="rounded-[10px] h-[290px] w-[380px] bg-cover brightness-90"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h5 className="text-black font-semibold text-xl mt-2">
                Speedy Delivery
              </h5>
              <p className="text-start text-gray-500">
                After your consultation, if medications are appropriate for you,
                they will be shipped directly to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTRT;
