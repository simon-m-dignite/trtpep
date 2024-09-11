import React from "react";
import { Link } from "react-router-dom";

const EnrollmentThankYouPage = () => {
  return (
    <div className="">
      <div className="w-full h-[60vh] text-center flex flex-col items-center justify-center pt-20 gap-5 text-white thankYouheader px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Welcome to The TRTPEP Family!
        </h1>
        <p className="text-sm md:text-base">
          You are one step closer to achieving optimal health. <br />
          You’ll be receiving a confirmation email shortly.
        </p>
      </div>
      <div className="w-full lg:w-[60%] mx-auto px-4 md:px-8 py-20">
        <h2 className="text-2xl font-semibold leading-[35px]">
          If you're ready to complete the enrollment process please choose one
          of the following options:
        </h2>
        <div className="w-full flex items-start mt-10">
          <div className="w-[5%]">
            <p className="font-bold text-4xl">1.</p>
          </div>
          <div className="w-[95%] flex flex-col items-start gap-3">
            <h3 className="font-bold text-lg">
              IF YOU NEED TO ORDER ONLY LABS
            </h3>
            <p className="text-gray-500">
              Kick off your lab testing process with TRTPEP by clicking the
              button below and choosing “Initial Labs.”
            </p>
            <p className="text-gray-500">
              Within 24 hours we’ll send you an email with all the necessary
              instructions for your blood draw. Expect us to receive your test
              results directly within 24 to 48 hours, and we’ll email your
              results and the next steps once our Provider has reviewed your
              labs.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Link
            to={"/lab-orders"}
            className="w-full py-4 bg-[#c00000] text-white text-center block uppercase rounded-md font-medium tracking-wide my-6"
          >
            order labs now
          </Link>
        </div>
        <div className="w-full flex items-start mt-12">
          <div className="w-[5%]">
            <p className="font-bold text-4xl">2.</p>
          </div>
          <div className="w-[95%] flex flex-col items-start gap-3">
            <h3 className="font-bold text-lg uppercase">
              If you are ready to choose a program
            </h3>
            <p className="text-gray-500">
              Please click the button below and make payment for your selected
              Therapy Plan. Once your payment is submitted you will receive a
              link via email to access the patient portal where you will be
              asked to complete the following:
            </p>
            {/* <p className="text-gray-500">
              Once your payment is submitted you will receive a link via email
              to access the patient portal where you will be asked to complete
              the following:
            </p> */}
            <ul className="list-disc px-4">
              <li className="text-gray-500">Sign consent forms</li>
              <li className="text-gray-500">Medical history forms</li>
              <li className="text-gray-500">Valid ID</li>
            </ul>
            <p className="text-gray-500">
              Upon receipt of your documents a Doctor consultation will be
              scheduled for you and you will be notified via email.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Link
            to={"/new-patients"}
            className="w-full py-4 bg-[#c00000] text-white text-center block uppercase rounded-md font-medium tracking-wide my-6"
          >
            choose a program
          </Link>
        </div>

        <div className="border-2 border-[#c00000] rounded-md p-3 mt-10">
          <p className="text-gray-600 font-bold mb-1 italic uppercase">
            IMPORTANT INFORMATION:
          </p>
          <p className="text-gray-500">
            If during your consultation you and the Doctor decide that
            Testosterone Replacement Therapy is not for you at that time, you
            will receive a full refund on the price paid for the hormone
            replacement therapy plan.
          </p>
        </div>
        <p className="text-gray-500 mt-10">
          Should you require assistance with enrollment at any time please
          contact our support team @ 888-942-0006.
        </p>
      </div>
    </div>
  );
};

export default EnrollmentThankYouPage;
