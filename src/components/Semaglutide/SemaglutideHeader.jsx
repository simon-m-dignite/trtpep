import React from "react";
import { styles } from "../../styles/styles";

const SemaglutideHeader = () => {
  return (
    <main
      className={`w-full h-screen semaglutide-header ${styles.paddingHorizontal} flex flex-col items-start justify-center gap-6`}
    >
      <h1 className="text-3xl lg:text-5xl text-white font-normal lg:leading-[60px] tracking-tight">
        Master Your Metabolism <br /> with Semaglutide!
      </h1>
      <h2 className="text-white text-sm">
        Just $460/month for a 2.5-month supply* at $1380
      </h2>
    </main>
  );
};

export default SemaglutideHeader;
