import React from "react";
import { styles } from "../../styles/styles";

const Hero = () => {
  return (
    <div className={`w-full h-screen flex flex-col gap-6 items-start justify-center TirzepatideTherapyHero ${styles.paddingHorizontal}`}>
      <h1 className="text-3xl lg:text-5xl text-white font-normal lg:leading-[60px] tracking-tight">
        Boost Your Energy and Control <br />Blood Sugarwith Tirzepatide!
      </h1>
      <h2 className="text-white text-sm">
        Just $596/month for a 2.5-month supply at $1,490*
      </h2>
    </div>
  );
};

export default Hero;
