import { NextRequest, NextResponse } from "next/server";
import { getStripe, PLAN } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { userId, email } = await req.json();

    if (!userId || !email) {
      return NextResponse.json({ error: "userId und email sind erforderlich" }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      metadata: { userId },
      line_items: [
        {
          price_data: {
            currency: PLAN.currency,
            product_data: {
              name: PLAN.name,
              description: PLAN.description,
            },
            unit_amount: PLAN.priceAmount,
            recurring: { interval: PLAN.interval },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/dashboard?abo=success`,
      cancel_url: `${req.nextUrl.origin}/dashboard/abo?abo=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Checkout fehlgeschlagen";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
