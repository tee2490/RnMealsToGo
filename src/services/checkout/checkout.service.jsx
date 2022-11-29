import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
    "pk_test_51M9JKILEJFIvBBF2XkujZkrsfTEzCwhb6Mju4cg46E92bFLupZh7FxanSKa17WqSqpfl3WuQ1K3AL2VbK1wCrg9200hagD6XvF")

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
    return fetch(`${host}/pay`, {
      body: JSON.stringify({
        token,
        name,
        amount,
      }),
      method: "POST",
    }).then((res) => {
      if (res.status > 200) {
        return Promise.reject("something went wrong processing your payment");
      }
      return res.json();
    });
  };