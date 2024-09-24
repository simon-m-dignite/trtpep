import React from "react";
import { Link } from "react-router-dom";

const CancelationPolicy = () => {
  return (
    <div className="horizontal-padding pt-60 pb-20">
      <h1 className="text-3xl font-bold text-center mb-5">
        Cancelation Policy
      </h1>
      <p>
        TRTPEP maintains a strict No Refund and No Return policy on all
        purchases.
      </p>

      <div className="w-full flex flex-col items-start gap-4 mt-6">
        <h2 className="font-bold text-xl">PRESCRIPTION PURCHASES</h2>
        <p>
          By purchasing a prescription, you expressly acknowledge and agree that
          TRTPEP (or a third-party payment processor) is authorized to charge
          the amount for the selected plan, along with any additional charges
          specified during the purchase process.
        </p>

        <h2 className="font-bold text-xl">PRESCRIPTION REFILLS</h2>
        <p>
          Patients are required to visit the following link on our website
          <Link
            to={"https://trtpep.com/trt-pep-refill-validation/"}
            className="text-blue-600"
          >
            https://trtpep.com/trt-pep-refill-validation/
          </Link>{" "}
          to request prescription refills. TRTPEP will not automatically refill
          prescriptions on behalf of patients.
        </p>

        <h2 className="font-bold text-xl">TERMINATION DUE TO NON-PAYMENT</h2>
        <p>
          Patients agree that payment for services is applicable for the
          designated 2.5-month period. TRTPEP is not liable for any damages
          resulting from the termination of services due to non-payment. TRTPEP
          reserves the right to terminate services for any delinquent account at
          any time.
        </p>

        <h2 className="font-bold text-xl">COLLECTION COSTS</h2>
        <p>
          Patients agree to cover all costs associated with the collection of
          overdue payments or the enforcement of this agreement. Any legal
          action arising from this agreement will take place in the state of
          Florida.
        </p>

        <h2 className="font-bold text-xl">LIMITATION OF LIABILITY</h2>
        <p>
          TRTPEP is not liable for any service interruptions. TRTPEP reserves
          the right to terminate services at its discretion.
        </p>

        <h2 className="font-bold text-xl">CONTACT INFORMATION</h2>
        <p>
          For inquiries, contact us at:{" "}
          <Link to={"mailto:info@trtpep.com"} className="text-blue-600">
            info@trtpep.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CancelationPolicy;
