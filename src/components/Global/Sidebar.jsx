import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = ({ handleShowNav }) => {
  const [showNav, setShowNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPayNowLinks, setShowPayNowLinks] = useState(false);
  const [openWeightLossDropdown, setOpenWeightLossDropdown] = useState(false);
  const [openPeptideDropdown, setOpenPeptideDropdown] = useState(false);
  const [usageDirectionDropdown, setUsageDirectionDropdown] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[90%] md:w-[50%] h-full bg-white float-end relative pt-16 shadow-2xl">
      <button
        className="w-8 h-8 bg-color p-1.5 absolute top-4 right-4"
        onClick={handleShowNav}
      >
        <CgClose className="w-full h-full text-white" />
      </button>

      <div className="w-full px-8">
        <Link
          to="/about"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          About Us
        </Link>
        <Link
          to="/blogs"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          blog
        </Link>
        <Link
          to="/faq"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          faq
        </Link>
        <div className="w-full text-start">
          <button
            onClick={handleMouseEnter}
            className="font-bold text-base uppercase border-b py-3 w-full text-start flex items-center justify-between"
          >
            <span>choose a therapy</span>
            <MdKeyboardArrowDown className="text-xl" />
          </button>
        </div>
        <Link
          to="/lab-orders"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          Labs
        </Link>
        <div className="w-full">
          {isDropdownOpen && (
            <div className="rounded-md bg-white flex flex-col items-start">
              <Link
                to="/testosterone-replacement-therapy/"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Testosterone Therapy
              </Link>
              <Link
                to="/hcg-therapy/"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                HCG Therapy
              </Link>
              <div className="w-full relative z-20">
                <button
                  onClick={() => setOpenPeptideDropdown(!openPeptideDropdown)}
                  className="w-full text-[15px] text-start font-semibold flex items-center justify-between uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2 z-20"
                >
                  Peptide Therapy <MdKeyboardArrowDown />
                </button>
                {openPeptideDropdown && (
                  <div className="bg-white w-full pr-4 z-20 flex flex-col items-start">
                    <Link
                      to="/tesamorelin-therapy/"
                      className="block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-10 py-2"
                    >
                      Tesamorelin Therapy
                    </Link>
                    <Link
                      to="/sermorelin-therapy/"
                      className="text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-10 py-2"
                    >
                      Sermorelin Therapy
                    </Link>
                  </div>
                )}
              </div>
              <div className="w-full relative z-10">
                <button
                  onClick={() =>
                    setOpenWeightLossDropdown(!openWeightLossDropdown)
                  }
                  className="w-full text-[15px] text-start font-semibold uppercase hover:text-[#c00000] flex items-center justify-between transition-all duration-300 px-6 py-2"
                >
                  Weight loss Therapy <MdKeyboardArrowDown />
                </button>
                {openWeightLossDropdown && (
                  <div className="bg-white w-full pr-4 z-20 flex flex-col items-start px-4">
                    <Link
                      to="/semaglutide-therapy/"
                      className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6"
                    >
                      Semaglutide Therapy
                    </Link>
                    <Link
                      to="/tirzepatide-therapy/"
                      className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6"
                    >
                      Tirzepatide Therapy
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="w-full">
          <button
            onClick={() => setShowPayNowLinks(!showPayNowLinks)}
            className="font-bold text-base uppercase border-b py-3 w-full text-start flex items-center justify-between"
          >
            Pay Now <MdKeyboardArrowDown className="text-xl" />
          </button>
          {showPayNowLinks && (
            <div className="rounded-md bg-white flex flex-col items-start">
              <Link
                to="/new-patients"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                New Patient
              </Link>
              <Link
                to="/trt-pep-refill-validation/"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Existing Patient
              </Link>
            </div>
          )}
        </div>

        <div className="w-full relative">
          <button
            onClick={() => setUsageDirectionDropdown(!usageDirectionDropdown)}
            className="font-bold text-base uppercase border-b py-3 w-full text-start flex items-center justify-between"
          >
            Usage Direction <MdKeyboardArrowDown className="text-xl" />
          </button>
          {usageDirectionDropdown && (
            <div
              className="rounded-md bg-white px-2 pt-3 w-72 z-40 top-6 flex flex-col items-start"
              onMouseEnter={() => setUsageDirectionDropdown(true)}
              onMouseLeave={() => setUsageDirectionDropdown(false)}
            >
              <a
                href="TESTOSTERONE.pdf"
                download="TESTOSTERONE.pdf"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Testosterone Application
              </a>
              <a
                href="HCG.pdf"
                download="HCG.pdf"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                HCG Application
              </a>
              <a
                href="CJC-SERMORELIN.pdf"
                download="CJC-SERMORELIN.pdf"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Sermorelin Application
              </a>
              <a
                href="CJC-SERMORELIN.pdf"
                download="CJC-SERMORELIN.pdf"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Tesamorelin Application
              </a>
              <a
                href="SEMAGLUTIDE-TIRZEPATIDE.pdf"
                download="SEMAGLUTIDE-TIRZEPATIDE.pdf"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Semaglutide Application
              </a>
              <a
                href="SEMAGLUTIDE-TIRZEPATIDE.pdf"
                download="SEMAGLUTIDE-TIRZEPATIDE.pdf"
                className="w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2"
              >
                Tirzepatide Application
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
