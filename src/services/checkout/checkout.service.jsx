import createStripe from "stripe-client";

const stripe = createStripe(
    "pk_test_51M9JKILEJFIvBBF2XkujZkrsfTEzCwhb6Mju4cg46E92bFLupZh7FxanSKa17WqSqpfl3WuQ1K3AL2VbK1wCrg9200hagD6XvF")

export const cardTokenRequest = (card) => stripe.createToken({ card });