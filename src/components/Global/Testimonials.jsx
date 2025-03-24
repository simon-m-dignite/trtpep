import React from "react";
import TestimonialCard from "./TestimonialCard";
import { styles } from "../../styles/styles";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TESTIMONIALS } from "../../constants/testimonials";

export const SliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  return (
    <section className={`w-full py-6 lg:py-14 ${styles.paddingHorizontal}`}>
      <div className="w-full flex flex-col items-center gap-y-3">
        <h1 className="text-[40px] font-semibold text-blue-950">
          TESTIMONIALS
        </h1>
        <h5 className="text-gray-500 font-bold text-base">
          SEE WHAT OUR PATIENTS ARE SAYING ABOUT US
        </h5>
        <div className="w-full relative mt-4 flex items-center">
          <Swiper
            {...SliderSettings}
            className="w-full bg-transparent overflow-y-visible"
          >
            <SliderButtons />
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide
                className="w-full h-full bg-white flex items-center justify-center pt-3"
                key={index}
              >
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-end mb-2 mt-6 gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-9 h-9 text-[#c00000] bg-white border shadow-sm border-[#c00000] hover:bg-[#c00000] hover:text-white transition-all duration-300 rounded-lg text-xl"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-9 h-9 text-[#c00000] bg-white border shadow-sm border-[#c00000] hover:bg-[#c00000] hover:text-white transition-all duration-300 rounded-lg text-xl"
      >
        &gt;
      </button>
    </div>
  );
};
