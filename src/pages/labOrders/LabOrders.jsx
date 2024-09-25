import React from "react";
import LabOrdersHero from "../../components/LabOrders/LabOrdersHero";
import LabOrdersForm from "../../components/LabOrders/LabOrdersForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const LabOrders = () => {
  // const stripePromise = loadStripe(
  //   "pk_live_51PgBFIFEWeqdZ67FPXnja4B7NRo3wSz2jLtCbrpQFjrS2xFbNFYBwqCaTmTa7SK5UVREhGtsCgCTjhhvHIz9csxY005hw9MlbV"
  // );

  const stripePromise = loadStripe(
    "pk_live_51PgBFIFEWeqdZ67FPXnja4B7NRo3wSz2jLtCbrpQFjrS2xFbNFYBwqCaTmTa7SK5UVREhGtsCgCTjhhvHIz9csxY005hw9MlbV"
  );
  return (
    <Elements stripe={stripePromise}>
      <LabOrdersHero />
      <LabOrdersForm />
    </Elements>
  );
};

export default LabOrders;
