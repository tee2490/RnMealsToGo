import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input-plus";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51M9JKILEJFIvBBF2XkujZkrsfTEzCwhb6Mju4cg46E92bFLupZh7FxanSKa17WqSqpfl3WuQ1K3AL2VbK1wCrg9200hagD6XvF")

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);
    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "27",
      cvc: "244",
      name: "Tee",
    };
    const info = await stripe.createToken({ card });
    console.log(info);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
