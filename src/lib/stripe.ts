import Stripe from "stripe";

// Lazy initialization to prevent build errors when env vars are not set
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-02-25.clover",
    });
  }
  return _stripe;
}

// Jahres-Abo: CHF 190.–
export const PLAN = {
  name: "KuAaWo Jahresmitgliedschaft",
  description: "Vereinsbeitrag + Bandraum-Zugang – 1 Jahr",
  priceAmount: 19000, // in Rappen
  currency: "chf",
  interval: "year" as const,
};
