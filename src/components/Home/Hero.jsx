import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";

const Hero = () => {
  return (
    <main
      className={`${styles.paddingHorizontal} py-12 lg:pb-12 pt-36 lg:pt-32 home-hero min-h-screen lg:h-[75vh]`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 h-full gap-x-6 gap-y-8">
        <div className="col-span-3 lg:col-span-2 h-full flex flex-col justify-center items-center md:items-start text-center md:text-start  md:pt-0 lg:pt-6 gap-6 lg:gap-10">
          <h1 className="text-white text-4xl xl:text-7xl font-semibold tracking-tighter">
            Revitalize Your Health Online!
          </h1>
          <h3 className="text-white font-medium text-lg md:text-base lg:text-lg">
            Unlock convenient & affordable solutions for testosterone,
            anti-aging or weight loss therapy! Meet on-line with an expert,
            licensed provider and experience the safe and private delivery of
            prescribed medications right to your door from an FDA approved
            compounding pharmacy.
          </h3>
          <h3 className="text-white font-medium text-lg md:text-base">
            Licensed Providers, Unmatched Convenience
          </h3>
          <div>
            <Link
              to="/testosterone-replacement-therapy#enrollment-form"
              className="bg-color flex items-center justify-center gap-1 px-8 py-5 uppercase text-sm font-medium rounded-full text-white"
            >
              enroll now <RiArrowRightUpLine className="text-lg" />
            </Link>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1 w-full mx-auto">
          <div className="relative flex items-end w-full md:w-[350px]">
            <span className="text-white font-bold text-4xl absolute top-10 md:top-20 left-[20%] md:-left-2">
              $
            </span>
            <h2 className="text-[120px] md:text-[200px] font-extrabold text-white mx-auto md:mx-4 py-0">
              89
            </h2>
            <span className="absolute right-2 md:bottom-20 text-white font-semibold text-lg lg:-right-1 bottom-12 md:right-0">
              .99/Month
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start gap-3">
            <p className="text-white font-semibold">
              Comprehensive Testosterone Replacement Therapy
            </p>
            <p className="text-sm text-white">
              Our package includes a provider consultation, Testosterone
              Cypionate w/aromatase inhibitor, syringes, and shipping.
            </p>
            <p className="text-sm text-white">NO HIDDEN FEES.</p>
            <p className="text-sm text-white">
              *Minimum a 2.5 month order then after 1st year price will increase
              to $109.99 a Month.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
