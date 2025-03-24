import React, { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 500; // Adjust 100 to your desired scroll position
      setScrolling(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This smooth scrolls the page
    });
  };

  return (
    <>
      {scrolling && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-color shadow-xl fixed bottom-8 right-4"
        >
          <IoArrowUp className="text-white text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
