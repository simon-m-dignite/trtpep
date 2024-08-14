import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { RiArrowRightUpLine } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [showContactPage, setShowContactPage] = useState(false);
  const [showPayNowLinks, setShowPayNowLinks] = useState(false);
  const [openWeightLossDropdown, setOpenWeightLossDropdown] = useState(false);
  const [openPeptideDropdown, setOpenPeptideDropdown] = useState(false);

  const handleNavigateToAboutPage = () => {
    navigate("/about");
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleShowPayNowLinksMouseEnter = () => {
    setShowPayNowLinks(true);
  };

  const handleShowPayNowLinksMouseLeave = () => {
    setShowPayNowLinks(false);
  };

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScroll(true);
      } else {
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
    <nav className={`w-full fixed top-0 z-40 bg-white shadow-lg`}>
      <div
        className={`${styles.paddingHorizontal} w-full bg-color flex items-center justify-between py-2`}
      >
        <p className="text-white font-medium text-sm flex items-center gap-1.5 mx-auto lg:mx-0">
          <IoCallSharp className="text-gray-400 text-lg" /> (888) 942-0006
          <span className="hidden lg:block lg:ml-10">
            Support Hours: M-F 10AM-5PM EST
          </span>
        </p>
        <Link
          to="/trt-pep-refill-validation/"
          className="py-2 uppercase px-4 rounded-full bg-white text-black font-semibold text-xs hidden lg:flex items-center gap-1"
        >
          refill now <RiArrowRightUpLine className="text-base" />
        </Link>
      </div>
      <div
        className={`w-full py-4 lg:py-6 flex items-center justify-between ${styles.paddingHorizontal} relative`}
      >
        <Link
          to="/"
          className={`text-2xl font-semibold uppercase text-[#c00000]`}
        >
          <span className="">TRT</span>pep
        </Link>
        <ul className="hidden lg:flex items-center gap-10">
          <li className="relative">
            <button
              onClick={handleNavigateToAboutPage}
              onMouseEnter={() => setShowContactPage(true)}
              onMouseLeave={() => setShowContactPage(false)}
              className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
            >
              About Us
            </button>
            {showContactPage && (
              <div
                className="absolute top-6 z-40 w-36 text-center border rounded-md shadow-lg px-4 py-2 text-sm bg-white"
                onMouseEnter={() => setShowContactPage(true)}
                onMouseLeave={() => setShowContactPage(false)}
              >
                <Link
                  to="/contact-testosterone-replacement"
                  className="text-[14px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/blogs"
              className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
            >
              faq
            </Link>
          </li>
          <li className="relative">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
            >
              choose a therapy
            </button>
            {isDropdownOpen && (
              <div
                className="rounded-md bg-white border  py-6 w-60 shadow-xl absolute z-40 top-6 flex flex-col items-start"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/testosterone-replacement-therapy/"
                  className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                >
                  Testosterone Therapy
                </Link>
                <Link
                  to="/hcg-therapy/"
                  className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                >
                  HCG Therapy
                </Link>
                <div className="w-full relative z-20">
                  <button
                    onMouseEnter={() => setOpenPeptideDropdown(true)}
                    onMouseLeave={() => setOpenPeptideDropdown(false)}
                    className={`w-full text-[15px] text-start block font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2 z-20`}
                  >
                    Peptide Therapy
                  </button>
                  {openPeptideDropdown && (
                    <div
                      className="rounded-md bg-white border py-6 w-60 shadow-xl absolute z-20 top-2 flex flex-col items-start -right-40"
                      onMouseEnter={() => setOpenPeptideDropdown(true)}
                      onMouseLeave={() => setOpenPeptideDropdown(false)}
                    >
                      <Link
                        to="/tesamorelin-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                      >
                        Tesamorelin Therapy
                      </Link>
                      {/* <Link
                        to="/peptide-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                      >
                        BPC-157 Therapy
                      </Link>
                      <Link
                        to="/peptide-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                      >
                        CJC-1295 Therapy
                      </Link> */}
                      <Link
                        to="/sermorelin-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                      >
                        Sermorelin Therapy
                      </Link>
                    </div>
                  )}
                </div>
                <div className="w-full relative z-10">
                  <button
                    onMouseEnter={() => setOpenWeightLossDropdown(true)}
                    onMouseLeave={() => setOpenWeightLossDropdown(false)}
                    className={`w-full block text-[15px] text-start font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                  >
                    Weight loss Therapy
                  </button>
                  {openWeightLossDropdown && (
                    <div
                      className="rounded-md bg-white border py-6 w-60 shadow-xl absolute top-6 flex flex-col items-start gap-4 -right-40 z-10"
                      onMouseEnter={() => setOpenWeightLossDropdown(true)}
                      onMouseLeave={() => setOpenWeightLossDropdown(false)}
                    >
                      <Link
                        to="/semaglutide-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6`}
                      >
                        Semaglutide Therapy
                      </Link>
                      <Link
                        to="/tirzepatide-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6`}
                      >
                        Tirzepatide Therapy
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/lab-orders"
              className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
            >
              labs
            </Link>
          </li>
          <li className="relative">
            <button
              onMouseEnter={handleShowPayNowLinksMouseEnter}
              onMouseLeave={handleShowPayNowLinksMouseLeave}
              className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
            >
              pay now
            </button>
            {showPayNowLinks && (
              <div
                className="rounded-md bg-white border px-6 py-6 w-60 shadow-xl absolute z-40 top-6 flex flex-col items-start gap-4"
                onMouseEnter={handleShowPayNowLinksMouseEnter}
                onMouseLeave={handleShowPayNowLinksMouseLeave}
              >
                <Link
                  to="/new-patients"
                  className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
                >
                  New Patient
                </Link>
                <Link
                  to="/trt-pep-refill-validation/"
                  className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300`}
                >
                  Existing Patient
                </Link>
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center justify-end lg:hidden gap-3">
          <button className="bg-color text-white uppercase text-sm font-semibold rounded-full px-3 py-2">
            refill now
          </button>
          <button
            className="w-9 h-9 bg-color rounded-md p-1.5"
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
          <Sidebar handleShowNav={handleShowNav} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
