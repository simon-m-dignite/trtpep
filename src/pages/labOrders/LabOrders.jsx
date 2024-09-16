import React from "react";
import LabOrdersHero from "../../components/LabOrders/LabOrdersHero";
import LabOrdersForm from "../../components/LabOrders/LabOrdersForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const LabOrders = () => {
  const stripePromise = loadStripe(
    "pk_live_51PfNP3DaXqcGQAlF4pv2Vd0U3LvOxLGdw7HnlTGYQtoZciZbxNfF1Oa50kyKRtNq3qCtEYntG1i2e458DtwrxHTK00NnIP0Jvs"
  );
  return (
    <Elements stripe={stripePromise}>
      <LabOrdersHero />
      <LabOrdersForm />
    </Elements>
  );
};

export default LabOrders;
