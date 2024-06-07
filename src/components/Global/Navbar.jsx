import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { RiArrowRightUpLine } from "react-icons/ri";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        // If scroll position is greater than 50px, change background to white
        setScroll(true);
      } else {
        // Otherwise, keep background transparent
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 overflow-hidden  z-50`}>
      <div
        className={`${styles.paddingHorizontal} w-full bg-blue-950 flex items-center justify-between py-2`}
      >
        <p className="text-white font-medium text-sm flex items-center gap-1.5 mx-auto lg:mx-0">
          <IoCallSharp className="text-gray-500 text-lg" /> 813-413-1000
          <span className="hidden lg:block lg:ml-10">
            Support Hours: M-F 10AM-5PM EST
          </span>
        </p>
        <button className="py-2 uppercase px-4 rounded-full bg-white text-black font-semibold text-xs hidden lg:flex items-center gap-1">
          refill now <RiArrowRightUpLine className="text-base"/>
        </button>
      </div>
      <div
        className={`w-full py-4 lg:py-6 ${
          scroll ? "bg-white shadow-md" : "bg-white"
        } flex items-center justify-between ${
          styles.paddingHorizontal
        } relative`}
      >
        <Link to="/" className={`text-2xl font-semibold uppercase ${scroll ? 'text-black' : 'text-black'}`}>
          <span className="text-blue-950">TRT</span>pep
        </Link>
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <Link
              to="/"
              className={`text-[15px] font-semibold uppercase ${
                scroll ? "text-black" : "text-black "
              } hover:text-blue-900 transition-all duration-300`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className={`text-[15px] font-semibold uppercase ${
                scroll ? "text-black" : "text-black "
              } hover:text-blue-900 transition-all duration-300`}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className={`text-[15px] font-semibold uppercase ${
                scroll ? "text-black" : "text-black "
              } hover:text-blue-900 transition-all duration-300`}>
              faq
            </Link>
          </li>
          <li>
            <Link to="/" className={`text-[15px] font-semibold uppercase ${
                scroll ? "text-black" : "text-black "
              } hover:text-blue-900 transition-all duration-300`}>
              choose a therapy
            </Link>
          </li>
          <li>
            <Link to="/" className={`text-[15px] font-semibold uppercase ${
                scroll ? "text-black" : "text-black "
              } hover:text-blue-900 transition-all duration-300`}>
              labs
            </Link>
          </li>
          <li>
            <Link to="/" className={`text-[15px] font-semibold uppercase ${
                scroll ? "text-black" : "text-black "
              } hover:text-blue-900 transition-all duration-300`}>
              pay now
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-end lg:hidden gap-3">
          <button className="bg-blue-950 text-white uppercase text-sm font-semibold rounded-full px-3 py-2">
            refill now
          </button>
          <button
            className="w-9 h-9 bg-blue-950 rounded-md p-1.5"
            onClick={handleShowNav}
          >
            <HiMenu className="w-full h-full text-white" />
          </button>
        </div>

        <div
          className={`h-screen w-screen bg-transparent z-50 fixed top-0 left-0 bottom-0 right-0 ${
            showNav ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500`}
        >
          <div className="w-[90%] h-full bg-white float-end relative pt-16">
            <button
              className="w-8 h-8 bg-yellow-500 p-1.5 absolute top-4 right-4"
              onClick={handleShowNav}
            >
              <CgClose className="w-full h-full text-white" />
            </button>

            <div className="w-full px-8">
              <Link
                to="/"
                className="font-bold text-base uppercase border-b py-3 w-full block"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="font-bold text-base uppercase border-b py-3 w-full block"
              >
                blog
              </Link>
              <Link
                to="/"
                className="font-bold text-base uppercase border-b py-3 w-full block"
              >
                faq
              </Link>
              <Link
                to="/"
                className="font-bold text-base uppercase border-b py-3 w-full block"
              >
                choose a therapy
              </Link>
              <Link
                to="/"
                className="font-bold text-base uppercase border-b py-3 w-full block"
              >
                labs
              </Link>
              <Link
                to="/"
                className="font-bold text-base uppercase border-b py-3 w-full block"
              >
                pay now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
