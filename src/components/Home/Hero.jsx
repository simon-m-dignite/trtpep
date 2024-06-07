import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";

const Hero = () => {
  return (
    <main
      className={`${styles.paddingHorizontal} py-12 lg:pb-12 pt-36 lg:pt-40 home-hero min-h-screen lg:h-[75vh]`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 h-full gap-x-6 gap-y-8">
        <div className="col-span-3 lg:col-span-2 h-full flex flex-col justify-center gap-6 lg:gap-10">
          <h1 className="text-white text-4xl lg:text-8xl font-semibold">
            VIRTUAL MEDICAL VISITS
          </h1>
          <h3 className="text-white font-medium text-lg md:text-base">
            Get affordable medications for LOW TESTOSTERONE and Anti-Aging
            remotely and delivered to your door!
          </h3>
          <h3 className="text-white font-medium text-lg md:text-base">
            MEDICATION PRESCRIBED BY A LICENSED PROVIDER
          </h3>
          <div>
            <button
              // to="/"
              className="bg-blue-950 flex items-center justify-center gap-1 px-8 py-4 uppercase text-sm font-medium rounded-full hover:bg-blue-950 transition-all duration-300 text-white"
            >
              enroll now <RiArrowRightUpLine className="text-lg"/>
            </button>
          </div>
        </div>
        {/* <div className="col-span-3 lg:col-span-1 flex justify-center items-center">
          <div className="w-full border-t-2 border-b-2 border-yellow-600 py-4 flex flex-col items-start gap-4 px-4">
            <img src="https://trtnation.com/wp-content/uploads/2024/05/trt-pricing-1.png" alt="" />
            <p className="text-yellow-600 font-semibold text-base">
              TESTOSTERONE REPLACEMENT THERAPY
            </p>
            <p className="text-white font-medium text-sm">
              Includes Provider consultation, Testosterone Cypionate, Aromatase
              inhibitor, Syringes and Shipping.
            </p>
            <p className="text-white font-medium text-sm">
              *149.99 with HCG. NO HIDDEN FEES.
            </p>
            <p className="text-white font-medium text-sm">
              *Minimum purchase 2.5 month supply
            </p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Hero;
