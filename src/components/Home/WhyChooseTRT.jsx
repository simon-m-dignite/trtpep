import React from "react";
import { styles } from "../../styles/styles";

const WhyChooseTRT = () => {
  return (
    <section className={`w-full px-4 md:px-12 lg:px-36 py-12 lg:py-20 bg-gray-50`}>
      <div className="w-full flex flex-col items-center justify-center gap-y-14">
        <h1 className="uppercase text-blue-950 text-4xl font-semibold text-center">
          WHY CHOOSE TRT NATION?
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 gap-y-6">
          <div className="w-full flex flex-col items-start gap-3">
            <img
              src="https://img.freepik.com/free-photo/enroll-now-registration-membership-concept_53876-148078.jpg?t=st=1717694263~exp=1717697863~hmac=e5387f19bb0399b4369f9fdb7f78617625f80aca96ff946a1db049bafe90593c&w=740"
              alt=""
              className="rounded-[10px] h-[300px] w-[380px] bg-contain brightness-90"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h5 className="text-blue-950 font-semibold text-xl mt-2">
                Online Enrollment
              </h5>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-[10px] h-[300px] w-[380px] bg-contain brightness-90"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h5 className="text-blue-950 font-semibold text-xl mt-2">
                Consult with a Provider
              </h5>
              <p className="text-gray-500 text-start">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <img
              src="https://img.freepik.com/free-photo/delivery-man-with-parcel-looking-away_23-2147862224.jpg?t=st=1717694163~exp=1717697763~hmac=de75be0923b0416d1400f4349a0348a880ada46972d919d83d65ab3c665a1694&w=360"
              alt=""
              className="rounded-[10px] h-[300px] w-[380px] bg-contain brightness-90"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h5 className="text-blue-950 font-semibold text-xl mt-2">
                Fast Delivery
              </h5>
              <p className="text-start text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTRT;
